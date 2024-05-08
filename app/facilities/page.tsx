"use client";

import Banner from "@/components/shared/Banner";
import Card from "@/components/shared/Card";
import { fetchFacilities } from "@/lib/data";
import { useEffect, useState } from "react";
import Loader from "@/components/shared/Loader";

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
    return <Loader></Loader>;
  }

  if (facilities && facilities.length < 1) {
    return null;
  }

  return (
    <main>
      <Banner mode="facilities" title="Facilities" />
      <h1 className="lg:w-7/12 lg:px-0 px-4 mx-auto text-center font-light my-16 text-black/80">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, ab.
        Inventore cupiditate alias quasi delectus explicabo hic ipsam ratione
        pariatur iusto vitae quis saepe eveniet rem nam, neque velit doloremque!
      </h1>
      <div className="grid lg:grid-cols-2 gap-4 lg:px-32 px-4">
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
