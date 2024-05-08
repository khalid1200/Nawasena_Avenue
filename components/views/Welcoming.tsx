import Image from "next/image";
import RestaurantPict from "../../public/images/Restaurant-landing.png";
import BalkonPict from "../../public/images/balkon-landing.png";
import { useState } from "react";

const Welcoming = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="lg:mx-32 grid lg:grid-cols-2 lg:px-0 px-4 lg:my-12 my-4 items-center">
      <div className="w-11/12">
        <h2 className="text-black/80 font-medium text-4xl lg:text-start text-center">
          Nawasena Avenue
        </h2>
        <h2 className="font-bold lg:text-5xl lg:text-start text-center">
          Bring The Heritage Create The Future
        </h2>
        <p className="my-4 lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil velit
          omnis dolorum repellat? Accusamus, nihil exercitationem vero
          recusandae quas soluta ipsam quia atque hic deleniti dolore
        </p>
        <p className="lg:text-lg  ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil velit
          omnis dolorum repellat? Accusamus, nihil exercitationem vero
          <span className="text-rose-500">[1]</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-4  mt-8 ">
        <Image
          src={RestaurantPict}
          alt="image-1"
          className={`cursor-pointer mt-16 ${
            isHovered ? "scale-110" : ""
          } transition-transform duration-300 ease-in-out`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <Image
          src={BalkonPict}
          alt="image-1"
          className={`${
            isHovered ? "cursor-pointer scale-110" : ""
          } transition-transform duration-300 ease-in-out`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </section>
  );
};
export default Welcoming;
