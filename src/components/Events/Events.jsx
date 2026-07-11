import EventHeader from "./EventHeader";
import EventDivider from "./EventDivider";
import HaldiCard from "./HaldiCard";
import WeddingCard from "./WeddingCard";
import eventData from "./eventData";

function Events() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <EventHeader />

        <div className="relative mt-5">

          <EventDivider />

          <div
            className="
            relative
            z-10
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-stretch
            "
          >

            <HaldiCard
              event={eventData[0]}
            />

            <WeddingCard
              event={eventData[1]}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Events;