import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaMapPin } from "react-icons/fa6";
import { FaCoffee, FaToilet, FaCar } from "react-icons/fa";
import { PiDeskFill } from "react-icons/pi";
import { IoMdWine } from "react-icons/io";
import { GiOfficeChair } from "react-icons/gi";
import { ReactNode } from "react";

type NavLink = {
  href: string;
  to: string;
};

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
}

export const nav_link: NavLink[] = [
  {
    href: "/",
    to: "Home",
  },
  {
    href: "/facilities",
    to: "Facilities",
  },
  {
    href: "/reservations",
    to: "Reservation",
  },
  {
    href: "/investor-relation",
    to: "Investor Relation",
  },
];

export const contacts = [
  {
    href: "0274 2924777",
    title: "reservation",
    icon: <BsFillTelephoneFill />,
  },
  {
    href: "+6281385777884",
    title: "Front Office",
    icon: <FaWhatsapp />,
  },
  {
    href: "admin@lafayettehotel-yogyakarta.com",
    title: "Email",
    icon: <CiMail />,
  },
  {
    title: "Address",
    href: "Jl. Padjajaran No. 409, Ring Road Utara, Kecamatan Depok, Kabupaten Sleman, DI Yogyakarta, 55281",
    icon: <FaMapPin />,
  },
];

export const services_data: Service[] = [
  {
    icon: <FaCar />,
    title: "Parking & Valet",
    desc: "Parking for Nawasena's guests is available at the front, west side and basement area.",
  },
  {
    icon: <FaCoffee />,
    title: "Restaurant & Lounge",
    desc: "Parking for Nawasena's guests is available at the front, west side and basement area.",
  },
  {
    icon: <FaToilet />,
    title: "Toilet",
    desc: "Parking for Nawasena's guests is available at the front, west side and basement area.",
  },
  {
    icon: <PiDeskFill />,
    title: "24 Hour Front Desk",
    desc: "Parking for Nawasena's guests is available at the front, west side and basement area.",
  },
  {
    icon: <GiOfficeChair />,
    title: "Meeting Room",
    desc: "Parking for Nawasena's guests is available at the front, west side and basement area.",
  },
  {
    icon: <IoMdWine />,
    title: "Minibar",
    desc: "Parking for Nawasena's guests is available at the front, west side and basement area.",
  },
];

export const contact_us = [
  {
    href: "+6281385777884",
    title: "Front Office",
    icon: <FaWhatsapp />,
  },
  {
    href: "admin@lafayettehotel-yogyakarta.com",
    title: "Email",
    icon: <CiMail />,
  },
];
