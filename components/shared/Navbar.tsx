"use client";

import { useState, useEffect } from "react";
import Logo from "../../public/images/logo-clear.png";
import Image from "next/image";
import { nav_link } from "@/helper";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > 100;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-sceen">
      <div
        className={`z-30 flex lg:px-32 px-4  shadow-lg justify-between items-center fixed top-0 w-full transition-all duration-300 ${
          isVisible ? "bg-white" : "hidden"
        }`}
      >
        <div className="py-2">
          <Image src={Logo} alt="logo" width={80} />
        </div>
        <ul className="lg:flex  space-x-4 text-xl">
          {nav_link.map((link, index: number) => (
            <li key={index} className="hidden lg:block hover:text-primary">
              <Link href={link.href}>{link.to}</Link>
            </li>
          ))}
          <li>
            <RxHamburgerMenu
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 right-0 h-full bg-white shadow-md z-50 transition-all w-64"
          data-aos="fade-left"
        >
          <ul className="text-secondary flex flex-col h-full justify-center mx-auto w-1/2 space-y-8">
            {nav_link.map((link, index: number) => (
              <li key={index} className="hover:text-primary">
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.to}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
