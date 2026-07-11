import VenueHeader from "./VenueHeader";
import VenueCard from "./VenueCard";
import venueData from "./venueData";
import VenueDivider from "./VenueDivider";

function Venue() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <VenueHeader />

        <div className="space-y-16">
  {venueData.map((item, index) => (
    <div key={item.id}>
      <VenueCard
        type={item.type}
        date={item.date}
        time={item.time}
        venue={item.venue}
        address={item.address}
        mapLink={item.mapLink}
        image={item.image}
      />

      {index !== venueData.length - 1 && <VenueDivider />}
    </div>
  ))}
</div>

      </div>

    </section>
  );
}

export default Venue;