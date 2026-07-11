import heroVideo from "../../assets/videos/hero-video.mp4";

function HeroVideo() {
  return (
    <video
    
  preload="metadata"
  autoPlay
  muted
  loop
  playsInline
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src={heroVideo}
        type="video/mp4"
      />
    </video>
  );
}

export default HeroVideo;