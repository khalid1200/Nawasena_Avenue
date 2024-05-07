"use client";

import { fetchCarousel } from "@/lib/data";
import { useEffect, useState } from "react";
import ErrorPage from "@/components/errorPage/ErrorPage";
import Carousel from "@/components/shared/Carousel";
import Welcoming from "@/views/Welcoming";
import VenueList from "@/views/VenueList";
import Service from "@/views/Services";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [carouselItem, setCarouselItem] = useState<any[] | undefined>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carouselData = await fetchCarousel();
        setCarouselItem(carouselData);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!carouselItem || carouselItem.length === 0) {
    return <ErrorPage />;
  }

  return (
    <main className="w-screen">
      <Carousel articles={carouselItem} />
      <Welcoming />
      <VenueList />
      <Service />
    </main>
  );
}
