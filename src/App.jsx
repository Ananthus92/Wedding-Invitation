import { useState } from "react";

import Intro from "./components/Intro/Intro";
import NameReveal from "./components/Intro/NameReveal";
import Hero from "./components/Hero/Hero";
import ScratchReveal from "./components/ScratchReveal/ScratchReveal";
import Countdown from "./components/countdown/Countdown";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";
import Venue from "./components/Venue/Venue";
import Footer from "./components/Footer/Footer";

import ScrollProgress from "./components/Common/ScrollProgress";
import BackToTop from "./components/Common/BackToTop";

import { weddingData } from "./data/weddingData";

import bg from "./assets/images/backgrounds/main_bg.jpg";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const [stage, setStage] = useState("intro");
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <>
      {stage === "intro" && (
        <Intro
          onStart={() => setStage("name")}
        />
      )}

      {stage === "name" && (
        <NameReveal
          bride={weddingData.bride}
          groom={weddingData.groom}
          date={weddingData.date}
          onComplete={() => {
            setPlayMusic(true);
            setStage("hero");
          }}
        />
      )}

      {stage === "hero" && (
        <>
          {/* Fixed Background */}
          <div className="fixed inset-0 -z-50 overflow-hidden">
            <img
              src={bg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="fixed inset-0 bg-black/55 -z-40"></div>

          {/* Website Content */}
          <div className="relative min-h-screen z-10">
            <MusicPlayer playMusic={playMusic} />

            <Hero
              bride={weddingData.bride}
              groom={weddingData.groom}
              date={weddingData.date}
              venue={weddingData.venue}
            />

            <ScrollProgress />

            <BackToTop />

            <ScratchReveal />

            <Countdown />

            <Events />

            <Gallery />

            <Venue />

            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;