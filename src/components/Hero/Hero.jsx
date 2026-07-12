import HeroVideo from "./HeroVideo";
import HeroInvitation from "./HeroInvitation";
import FloatingParticles from "./FloatingParticles";
import ScrollIndicator from "./ScrollIndicator";

function Hero({
  bride,
  groom,
  date,
  venue,
}) {
  return (
    <section className=" px-5 sm:px-6 lg:px-8 py-8 md:py-12">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:block relative">

          {/* ================= Video ================= */}

          <div
            className="
            relative
            w-full
            h-65
            sm:h-95
            md:h-125
            lg:h-180
            rounded-[35px]
            overflow-hidden
            "
          >
            <HeroVideo />

            <div className="absolute inset-0 bg-black/35"></div>

            <FloatingParticles />

            <div className="hidden lg:block">
              <ScrollIndicator />
            </div>
          </div>

          {/* ================= Invitation ================= */}

          <div
            className="
            mt-6
            lg:mt-0
            lg:absolute
            lg:right-10
            lg:bottom-10
            lg:w-105
            z-20
            "
          >
            <HeroInvitation
              bride={bride}
              groom={groom}
              date={date}
              venue={venue}
            />
          </div>

          {/* Mobile Scroll */}

          <div className="lg:hidden mt-8 flex justify-center">
            <ScrollIndicator />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;