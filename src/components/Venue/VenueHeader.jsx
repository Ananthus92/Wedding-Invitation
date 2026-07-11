import ScrollReveal from "../Common/ScrollReveal";

function VenueHeader() {
  return (
    <ScrollReveal once={false}>
      <div className="text-center mb-20">

        <p
          className="
          uppercase
          tracking-[8px]
          text-yellow-500
          text-sm
          "
        >
          Venue
        </p>

        <h2
          className="
          mt-5
          text-5xl
          md:text-6xl
          italic
          text-yellow-100
          "
        >
          Wedding Locations
        </h2>

        <div className="flex justify-center mt-6">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        </div>

        <p
          className="
          mt-6
          text-yellow-400
          max-w-2xl
          mx-auto
          leading-8
          text-lg
          "
        >
          Join us as we celebrate these beautiful moments and
          create unforgettable memories together.
        </p>

      </div>
    </ScrollReveal>
  );
}

export default VenueHeader;