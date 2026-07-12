import { useEffect, useRef } from "react";
import bgMusic from "../../assets/music/bg-music.mp3";

function MusicPlayer({ playMusic }) {

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
  }, []);

  useEffect(() => {

    if (!audioRef.current) return;

    if (playMusic) {
      audioRef.current.play().catch(() => {});
    }

  }, [playMusic]);

  return null;
}

export default MusicPlayer;