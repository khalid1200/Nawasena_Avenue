import Image, { StaticImageData } from "next/image";
import FacilitiesImage from "../../public/images/Facilities-banner.jpg";
import ReservationImage from "../../public/images/Facilities-banner.jpg";
import InvestorRelationImage from "../../public/images/Facilities-banner.jpg";
import { nav_link } from "@/helper";
import Link from "next/link";
import Logo from "../../public/images/logo-clear.png";

type BannerProps = {
  mode: "facilities" | "reservation" | "investor relation";
  title: string;
};

type DetailProps = {
  mode: "detail";
  image: string;
  title: string;
};

const Banner = (props: BannerProps | DetailProps) => {
  const { mode } = props;

  const imageMap: { [key: string]: StaticImageData } = {
    facilities: FacilitiesImage,
    reservation: ReservationImage,
    "investor relation": InvestorRelationImage,
  };

  const imageToUse = imageMap[mode.toLowerCase()];

  if (mode !== "detail") {
    return (
      <main className="relative block mx-auto shadow-xl ">
        <div className="relative w-full h-96 overflow-hidden">
          <Image src={imageToUse} alt={mode} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute z-40 top-0 left-0 right-0 p-2 bg-strong-black bg-opacity-75 text-2xl lg:px-32 pb-24 font-bold text-white">
          <div className="flex items-center justify-between">
            <div className="py-2">
              <Image src={Logo} alt="logo" width={80} />
            </div>
            <ul className="flex space-x-4 text-xl">
              {nav_link.map((link, index: number) => (
                <li key={index} className="lg:block hidden hover:text-primary">
                  <Link href={link.href}>{link.to}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h1 className="absolute bottom-0 left-0 right-0 p-2 bg-strong-black bg-opacity-75 lg:text-6xl text-4xl lg:px-32 px-4 lg:pb-24 pb-12 font-bold text-white">
          {props.title}
        </h1>
      </main>
    );
  }
  if (mode === "detail") {
    return (
      <main className="relative block mx-auto shadow-xl ">
        <div className="relative w-full h-[80vh] overflow-hidden">
          <Image src={props.image} alt={mode} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute z-40 top-0 left-0 right-0 p-2 bg-strong-black bg-opacity-75 h-full text-2xl lg:px-32 pb-24 font-bold text-white">
          <div className="flex items-center justify-between">
            <div className="py-2">
              <Image src={Logo} alt="logo" width={80} />
            </div>
            <ul className="flex space-x-4 text-xl">
              {nav_link.map((link, index: number) => (
                <li key={index} className="lg:block hidden hover:text-primary">
                  <Link href={link.href}>{link.to}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h1
          data-aos="zoom-out"
          className="md:hidden absolute bottom-24 left-0 right-0 p-2 bg-strong-black bg-opacity-75 lg:text-6xl text-4xl lg:px-32 text-center px-4 lg:pb-24 pb-12 font-bold text-white"
        >
          {props.title}
        </h1>
      </main>
    );
  }
};

export default Banner;
