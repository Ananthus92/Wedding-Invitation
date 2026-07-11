import { useRef, useEffect, useState } from "react";
import ScratchParticles from "./ScratchParticles";
import revealSound from "../../assets/music/reveal.mp3";
import scratchCard from "../../assets/images/backgrounds/scratch-card.png";

function ScratchCanvas({ revealed, setRevealed }) {
  const canvasRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [autoWiping, setAutoWiping] = useState(false);
  const [particles, setParticles] = useState([]);

  const revealAudio = useRef(null);

  // Load reveal sound
  useEffect(() => {
    revealAudio.current = new Audio(revealSound);
    revealAudio.current.preload = "auto";
    revealAudio.current.volume = 0.5;
  }, []);

  // Draw scratch card
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const width = Math.min(window.innerWidth - 40, 520);
    const height = width * 0.42;

    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.src = scratchCard;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // ctx.strokeStyle = "#FFF3C4";
      // ctx.lineWidth = 4;
      // ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 32px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(
        "✨ Scratch Here ✨",
        canvas.width / 2,
        canvas.height / 2
      );
    };
  }, []);

  // Stop scratching when pointer is released
  useEffect(() => {
    const handleMouseUp = () => {
      setIsScratching(false);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  // Scratch function
  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 45, 0, Math.PI * 2);
    ctx.fill();
  };

  // Create sparkle particles
  const createParticle = (x, y) => {
    const id = Date.now() + Math.random();

    setParticles((prev) => [
      ...prev,
      {
        id,
        x,
        y,
      },
    ]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 800);
  };

  // Auto wipe animation
  const autoWipe = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (revealAudio.current) {
      revealAudio.current.currentTime = 0;
      revealAudio.current.play().catch(() => {});
    }

    let x = 0;

    const animation = setInterval(() => {
      ctx.globalCompositeOperation = "destination-out";

      ctx.fillRect(x, 0, 45, canvas.height);

      x += 25;

      if (x >= canvas.width) {
        clearInterval(animation);

        setTimeout(() => {
          setRevealed(true);
        }, 200);
      }
    }, 16);
  };

  // Check scratch progress
  const checkScratchProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const imageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const pixels = imageData.data;

    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const totalPixels = canvas.width * canvas.height;

    const percentage = (transparentPixels / totalPixels) * 100;

    if (percentage >= 70 && !autoWiping && !revealed) {
      setAutoWiping(true);
      autoWipe();
    }
  };

  return (
    <>
      {!revealed && (
        <canvas
          ref={canvasRef}
          style={{
            touchAction: "none",
          }}
          className="absolute w-full max-w-[520px] rounded-3xl cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseMove={(e) => {
            if (!isScratching || autoWiping) return;

            const rect = canvasRef.current.getBoundingClientRect();

            const scaleX = canvasRef.current.width / rect.width;
            const scaleY = canvasRef.current.height / rect.height;

            const x = (e.clientX - rect.left) * scaleX;
            const y = (e.clientY - rect.top) * scaleY;

            scratch(x, y);
            createParticle(x, y);
            checkScratchProgress();
          }}
          onTouchStart={() => setIsScratching(true)}
          onTouchEnd={() => setIsScratching(false)}
          onTouchMove={(e) => {
            e.preventDefault();

            if (!isScratching || autoWiping) return;

            const rect = canvasRef.current.getBoundingClientRect();
            const touch = e.touches[0];

            const scaleX = canvasRef.current.width / rect.width;
            const scaleY = canvasRef.current.height / rect.height;

            const x = (touch.clientX - rect.left) * scaleX;
            const y = (touch.clientY - rect.top) * scaleY;

            scratch(x, y);
            createParticle(x, y);
            checkScratchProgress();
          }}
        />
      )}

      <ScratchParticles particles={particles} />
    </>
  );
}

export default ScratchCanvas;