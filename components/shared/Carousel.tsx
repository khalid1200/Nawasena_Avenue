import { nav_link } from "@/helper";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../../public/images/logo-clear.png";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = ({ articles }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    setLoading(true);
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === articles.length - 1 ? 0 : prevSlide + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [articles]);

  useEffect(() => {
    if (articles.length > 0) {
      setLoading(false);
    }
  }, [articles]);

  const handleSlideChange = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="sliderAx h-auto">
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {articles.map((article: any, index: number) => (
            <div
              key={article.id}
              id={`slider-${index + 1}`}
              className={`container w-screen ${
                currentSlide === index ? "" : "hidden"
              }`}
            >
              <div
                className="bg-cover object-contain w-screen lg:h-screen h-[85vh] relative text-black  "
                style={{
                  backgroundImage: `url(${article.image})`,
                  width: "100vw",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="flex items-center justify-between lg:px-32 md:px-16 text-white font-semibold relative z-40 ">
                  <div className="lg:py-2 mx-4 my-4">
                    <Image src={Logo} alt="logo" width={80} />
                  </div>
                  <ul className="lg:flex hidden space-x-4 text-xl">
                    {nav_link.map((link, index: number) => (
                      <li
                        key={index}
                        className="hover:text-primary cursor-pointer"
                      >
                        <Link href={link.href}>{link.to}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center lg:justify-center h-full w-full bg-transparent py-2 text-white relative z-10 lg:mt-0 mt-8">
                  <h1
                    data-aos="fade-up"
                    className="text-3xl  lg:text-6xl font-semibold"
                  >
                    {article.text.toUpperCase()}
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="lg:text-2xl text-md lg:px-0 px-4 lg:w-7/12 mx-auto text-center my-6 text-white/70"
                  >
                    {article.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="relative z-[10] pb-2 mt-4 space-x-2 bottom-24 right-0 left-4">
            {articles.map((_: any, index: number) => (
              <button
                key={index}
                className={`  w-8 h-8 text-primary rounded-full ${
                  currentSlide === index ? "text-white" : ""
                }`}
                onClick={() => handleSlideChange(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
