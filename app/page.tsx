"use client";

import { fetchCarousel, fetchVenue } from "@/lib/data";
import { useEffect, useState } from "react";
import ErrorPage from "@/components/errorPage/ErrorPage";
import Carousel from "@/components/shared/Carousel";
import Welcoming from "@/components/views/Welcoming";
import VenueList from "@/components/views/VenueList";
import Service from "@/components/views/Services";
import Testimonials from "@/components/views/Testimonials";
import Loader from "@/components/shared/Loader";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [carouselItem, setCarouselItem] = useState<any[] | undefined>([]);
  const [venue, setVenue] = useState<any[] | undefined>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const venue = await fetchVenue();
        setVenue(venue);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  if (!carouselItem || carouselItem.length === 0) {
    return <ErrorPage />;
  }

  return (
    <main className="w-screen">
      <div className="fixed left-0 h-screen flex flex-col justify-end bottom-4 z-50 space-y-4 p-4 text-primary">
        <FaWhatsapp className="text-2xl hover:text-black transition duration-200" />
        <CiFacebook className="text-2xl hover:text-black transition duration-200" />
        <CiInstagram className="text-2xl hover:text-black transition duration-200" />
      </div>
      <Carousel articles={carouselItem} />
      <Welcoming />
      <VenueList venue={venue} />
      <Testimonials />
      <Service />
    </main>
  );
}
