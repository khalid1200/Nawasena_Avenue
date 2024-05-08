import { nav_link } from "@/helper";
import Link from "next/link";
import { FaMapPin } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <main className="text-white mt-16">
      <div className="grid lg:grid-cols-3 lg:space-y-0 space-y-8 bg-areng  lg:px-32 px-4 py-16">
        <div>
          <h1 className="text-3xl">About Us</h1>
          <p className="text-white/80 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ab
            vero facilis vel animi perferendis qui amet doloremque veniam.
            Accusamus aut commodi fugiat nulla asperiores similique amet, iusto
            quae est.
          </p>
        </div>
        <div className="lg:w-1/2 lg:mx-auto">
          <h1 className="text-3xl">Explore</h1>
          <ul className="flex flex-col space-y-2 text-xl mt-4 text-white/80">
            {nav_link.map((link, index: number) => (
              <li key={index} className="hover:text-primary">
                <Link href={link.href}>{link.to}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-3xl">Contact</h1>
          <p className="flex items-center mt-4 lg:text-lg text-white/80">
            <span className="lg:text-2xl mr-2 text-white">
              <FaMapPin />
            </span>
            Jl. Padjajaran No. 409, Ring Road Utara, Kecamatan Depok, Kabupaten
            Sleman, DI Yogyakarta, 55281
          </p>

          <p className="flex items-center my-4 lg:text-2xl text-white/80">
            <span className="lg:text-2xl mr-2 text-white">
              <BsFillTelephoneFill />
            </span>
            0274 2924777
          </p>
          <a className="hover:border-b-2  border-b-primary cursor-pointer text-white/80">
            admin@lafayettehotel-yogyakarta.com
          </a>
        </div>
      </div>
      <div className="bg-[#1E1E1E]">
        <h1 className="text-center py-8 lg:px-0 px-4">
          © Copyright 2024 by PT Sinergi Megah Internusa. All Rights Reserved.
        </h1>
      </div>
    </main>
  );
};

export default Footer;
