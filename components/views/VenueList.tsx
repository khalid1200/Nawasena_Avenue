import Card from "@/components/shared/Card";
import Loader from "@/components/shared/Loader";

const VenueList = ({ venue }: any) => {
  if (!venue) {
    return <Loader></Loader>;
  }

  return (
    <main className="bg-areng lg:px-32 px-4 py-16">
      <h2 className="lg:text-4xl font-medium text-white lg:text-start text-center">
        Nawasena Avenue
      </h2>
      <h1 className="lg:text-5xl text-4xl font-bold text-white lg:text-start text-center">
        Venue
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  mt-12">
        {venue.map((venueItem: any, index: number) => (
          <Card
            key={index}
            mode="venue"
            image={venueItem.thumbnailUrl}
            title={venueItem.venue}
          />
        ))}
      </div>
    </main>
  );
};

export default VenueList;
