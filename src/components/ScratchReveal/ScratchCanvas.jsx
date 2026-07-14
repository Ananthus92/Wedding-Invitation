import { useRef, useEffect, useState } from "react";
import ScratchParticles from "./ScratchParticles";

import revealSound from "../../assets/music/reveal.mp3";
import scratchSound from "../../assets/music/scratch.mp3";
import scratchCard from "../../assets/images/backgrounds/scratch-card.png";

function ScratchCanvas({ revealed, setRevealed }) {
  const canvasRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [autoWiping, setAutoWiping] = useState(false);
  const [particles, setParticles] = useState([]);

  const revealAudio = useRef(null);
  const scratchAudio = useRef(null);

  const startScratchSound = () => {
    if (!scratchAudio.current) return;

    if (scratchAudio.current.paused) {
      scratchAudio.current.currentTime = 0;
      scratchAudio.current.play().catch(() => {});
    }
  };

  const stopScratchSound = () => {
    if (!scratchAudio.current) return;

    scratchAudio.current.pause();
    scratchAudio.current.currentTime = 0;
  };


  // Load sounds
  useEffect(() => {
    revealAudio.current = new Audio(revealSound);
    revealAudio.current.preload = "auto";
    revealAudio.current.volume = 0.2;

    scratchAudio.current = new Audio(scratchSound);
    scratchAudio.current.preload = "auto";
    scratchAudio.current.volume = 0.25;
    scratchAudio.current.loop = true;

    return () => {
      revealAudio.current?.pause();
      scratchAudio.current?.pause();
    };
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
      ctx.drawImage(img, 0, 0, width, height);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 32px Georgia";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(
        " ✨ Scratch Here ✨",
        width / 2,
        height / 2
      );
    };
  }, []);

  // Stop scratching on pointer release
  useEffect(() => {
    const handlePointerUp = () => {
      setIsScratching(false);
      stopScratchSound();
    };

    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, []);

  
  // Scratch effect
  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x, y, 45, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = "source-over";
  };

  // Sparkle particles
  const createParticle = (x, y) => {
    if (revealed) return;

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

  // Auto reveal
  const autoWipe = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    stopScratchSound();

    revealAudio.current?.play().catch(() => {});

    let x = 0;

    const animation = setInterval(() => {
      ctx.globalCompositeOperation = "destination-out";

      ctx.fillRect(x, 0, 45, canvas.height);

      x += 25;

      if (x >= canvas.width) {
        clearInterval(animation);

        ctx.globalCompositeOperation = "source-over";

        setTimeout(() => {
          setRevealed(true);
        }, 200);
      }
    }, 16);
  };

  // Reveal after 70%
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

    const percentage =
      (transparentPixels / (canvas.width * canvas.height)) * 100;

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
          style={{ touchAction: "none" }}
          className="absolute w-full max-w-130 rounded-3xl cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          onMouseDown={() => {
            setIsScratching(true);
            startScratchSound();
          }}
          onMouseUp={() => {
            setIsScratching(false);
            stopScratchSound();
          }}
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
          onTouchStart={() => {
            setIsScratching(true);
            startScratchSound();
          }}
          onTouchEnd={() => {
            setIsScratching(false);
            stopScratchSound();
          }}
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