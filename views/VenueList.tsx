import Card from "@/components/shared/Card";

const VenueList = ({ venue }: any) => {
  if (!venue) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="bg-areng px-32 py-16">
      <h2 className="text-4xl font-medium text-white">Nawasena Avenue</h2>
      <h1 className="text-5xl font-bold text-white">Venue</h1>
      <div className="grid grid-cols-3 gap-4 mt-12">
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
