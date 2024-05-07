"use client";

import { useState, useEffect } from "react";
import Logo from "../../public/images/logo-clear.png";
import Image from "next/image";
import { nav_link } from "@/helper";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > 0;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 flex px-32 shadow-lg justify-between items-center fixed top-0 w-full transition-all duration-300 ${
        isVisible ? "bg-white" : "opacity-0 -top-32"
      }`}
    >
      <div className="py-2">
        <Image src={Logo} alt="logo" width={80} />
      </div>
      <ul className="flex space-x-4 text-xl">
        {nav_link.map((link, index: number) => (
          <li key={index} className="hover:text-primary">
            <Link href={link.href}>{link.to}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
