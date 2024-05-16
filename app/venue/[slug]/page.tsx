"use client";

import Banner from "@/components/shared/Banner";
import { fetchVenueBySlug } from "@/lib/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/shared/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowDown } from "react-icons/hi";
import { LiaDotCircle } from "react-icons/lia";
import Image from "next/image";

const Venue = ({ params }: any) => {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      try {
        if (!params.slug) {
          throw new Error("Slug not found in query parameters");
        }
        const data: any = await fetchVenueBySlug(params.slug.toString());

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) {
    return <Loader></Loader>;
  }

  console.log(data);

  return (
    <main>
      <Banner mode="detail" image={data.thumbnailUrl} title={data.venue} />
      <div className=" flex flex-row items-end justify-center pt-12 h-full">
        <div className="animate-bounce border border-gray-300 px-2 py-2 rounded-full text-gray-400 hover:border-primary hover:text-areng">
          <HiArrowDown size={35} />
        </div>
      </div>
      <section className="lg:px-32 md:px-12 px-4 lg:flex my-16">
        <div className="lg:w-9/12">
          <h2 className="font-medium text-2xl">Nawasena Avenue</h2>
          <h1 className="font-bold text-4xl">{data.venue}</h1>
          <p className="mt-4">{data.description}</p>
        </div>
        <div className="">
          <h1 className="font-medium text-2xl mt-16 mb-4">Features</h1>
          <ul className="space-y-4">
            {data.features.map((val: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="text-primary mr-2">
                  <LiaDotCircle />
                </span>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-areng text-white lg:px-32 md:px-12 px-4 py-12">
        <h2 className="font-medium text-2xl md:text-start text-center">
          Nawasena Avenue
        </h2>
        <h1 className="font-bold text-4xl  md:text-start text-center">Venue</h1>
        <div className={`grid lg:grid-cols-3 md:grid-cols-2  gap-4 mt-16`}>
          {data.images.map((image: { imageUrl: string }, index: number) => (
            <Image
              data-aos="zoom-in"
              key={index}
              src={image.imageUrl}
              alt={`${data.venue} ${index + 1}`}
              width={500}
              height={500}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Venue;
