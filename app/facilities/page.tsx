"use client";

import Banner from "@/components/shared/Banner";
import Card from "@/components/shared/Card";
import { fetchFacilities } from "@/lib/data";
import { useEffect, useState } from "react";

const Facilities = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [facilities, setFacilities] = useState<any[] | undefined>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFacilities();
        setFacilities(data);
      } catch (error) {
        console.error("Error fetching facilities:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <Banner mode="facilities" title="Facilities" />
      <h1 className="w-7/12 mx-auto text-center font-light my-16 text-black/80">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, ab.
        Inventore cupiditate alias quasi delectus explicabo hic ipsam ratione
        pariatur iusto vitae quis saepe eveniet rem nam, neque velit doloremque!
      </h1>
      <div className="grid grid-cols-2 gap-4 mx-32">
        {facilities && facilities.length > 0 ? (
          facilities.map((facility: any, index: number) => (
            <Card
              key={index}
              mode="feature"
              image={facility.thumbnailUrl}
              title={facility.facility}
            />
          ))
        ) : (
          <h1 className="text-center w-full">No Items</h1>
        )}
      </div>
    </main>
  );
};

export default Facilities;
