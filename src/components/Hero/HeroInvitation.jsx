import invite from "../../assets/images/invite.png";

function HeroInvitation({
  bride,
  groom,
  
}) {
  return (
    <div
      className="
      w-full
      max-w-md
      mx-auto
      rounded-[30px]
      overflow-hidden
      shadow-2xl
      select-none
      "
      style={{
        backgroundImage: `url(${invite})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/10">

        <div
          className="
          px-6
          py-10
          md:px-10
          md:py-14
          text-center
          "
        >
          <p className="uppercase tracking-[5px] text-[11px] text-yellow-900">
            Together With Our Families
          </p>

          <p className="mt-5 italic text-base md:text-xl text-yellow-900 leading-7">
            We invite you to celebrate our wedding of
          </p>

          <h1
            className="
            mt-8
            text-3xl
            md:text-5xl
            tracking-[3px]
            text-yellow-800
            "
          >
            {bride}
          </h1>

          <div className="my-4 text-3xl md:text-4xl text-yellow-700">
            &
          </div>

          <h1
            className="
            text-3xl
            md:text-5xl
            tracking-[3px]
            text-yellow-800
            "
          >
            {groom}
          </h1>

         

        </div>

      </div>
    </div>
  );
}

export default HeroInvitation;