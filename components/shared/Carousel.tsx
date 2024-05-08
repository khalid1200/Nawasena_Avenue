import { nav_link } from "@/helper";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../../public/images/logo-clear.png";
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
    <div className="sliderAx h-auto mt-4">
      {loading ? (
        <div>Loading...</div>
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
                className="bg-cover w-screen h-screen relative text-black object-fill "
                style={{
                  backgroundImage: `url(${article.image})`,
                  width: "100vw",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="flex items-center justify-between px-32 text-white font-semibold relative z-40 mt-4">
                  <div className="py-2">
                    <Image src={Logo} alt="logo" width={80} />
                  </div>
                  <ul className="flex space-x-4 text-xl">
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

                <div className="flex flex-col items-center justify-center h-full w-full bg-transparent py-2 text-white relative z-10">
                  <h1
                    data-aos="fade-up"
                    className="text-md  text-6xl font-semibold"
                  >
                    {article.text.toUpperCase()}
                  </h1>
                  <p className="text-2xl w-7/12 mx-auto text-center my-6">
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
