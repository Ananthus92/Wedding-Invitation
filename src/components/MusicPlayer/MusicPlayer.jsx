import { useEffect, useRef } from "react";
import bgMusic from "../../assets/music/bg-music.mp3";

function MusicPlayer({ playMusic }) {
  const audioRef = useRef(null);
  const wasPlayingRef = useRef(false);

  // Create audio only once
  useEffect(() => {
    const audio = new Audio(bgMusic);

    audio.loop = true;
    audio.volume = 0.1;

    audioRef.current = audio;

    // Cleanup when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  // Play music when requested
  useEffect(() => {
    if (!audioRef.current) return;

    if (playMusic) {

  if (audioRef.current.paused) {
    audioRef.current.play().catch(() => {});
  }

} else {

  if (!audioRef.current.paused) {
    audioRef.current.pause();
  }

}
  }, [playMusic]);

  // Pause when tab is hidden and resume when visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        wasPlayingRef.current = !audioRef.current.paused;
        audioRef.current.pause();
      } else {
        if (wasPlayingRef.current) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  return null;
}

export default MusicPlayer;