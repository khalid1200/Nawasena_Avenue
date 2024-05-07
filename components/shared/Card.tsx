"use client";

import Image from "next/image";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type FeatureCardProps = {
  mode: "feature";
  title: string;
  image: string;
  onClick?: () => void;
};

type ServiceCardProps = {
  mode: "service";
  title: string;
  icon: ReactNode;
  description: string;
};

type VenueCardProps = {
  mode: "venue";
  title: string;
  image: string;
};

const Card = (props: FeatureCardProps | ServiceCardProps | VenueCardProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { mode } = props;
  if (mode === "feature") {
    return (
      <div
        data-aos="zoom-in"
        className="relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-8 pt-40 w-full mx-auto "
      >
        <div className="absolute inset-0 transition-transform duration-300 ease-out hover:scale-110">
          <Image
            src={props.image}
            alt="University of Southern California"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="transition-transform duration-300 ease-out"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          {props.title}
        </h3>
        <div className="z-10 flex justify-end items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <button className="hover:text-primary">Detail</button>
        </div>
      </div>
    );
  }
  if (mode === "service") {
    return (
      <div data-aos="zoom-in" className="px-4 py-8 w-full h-[200px] border">
        <div className="flex justify-center text-3xl text-primary">
          {props.icon}
        </div>
        <h1 className="text-center mt-4 text-xl">{props.title}</h1>
        <p className="text-center mt-2">{props.description}</p>
      </div>
    );
  }
  if (mode === "venue") {
    return (
      <div
        data-aos="zoom-in"
        className="relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-8 pt-40 w-full mx-auto h-[300px]"
      >
        <div className="absolute inset-0 transition-transform duration-300 ease-out hover:scale-110">
          <Image
            src={props.image}
            alt={props.title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="transition-transform duration-300 ease-out"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          {props.title}
        </h3>
        <div className="z-10 flex justify-end items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          <button className="hover:text-primary">Detail</button>
        </div>
      </div>
    );
  }
};

export default Card;
