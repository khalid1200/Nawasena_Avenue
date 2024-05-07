import Image from "next/image";
import RestaurantPict from "../public/images/Restaurant-landing.png";
import BalkonPict from "../public/images/balkon-landing.png";
import { useState } from "react";

const Welcoming = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mx-32 grid grid-cols-2 my-12">
      <div>
        <h2 className="text-black/80 font-medium text-4xl">Nawasena Avenue</h2>
        <h2 className="font-bold text-5xl">
          Bring The Heritage Create The Future
        </h2>
        <p className="my-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil velit
          omnis dolorum repellat? Accusamus, nihil exercitationem vero
          recusandae quas soluta ipsam quia atque hic deleniti dolore
          consequuntur quibusdam, impedit quisquam, dolor sapiente sunt saepe
          iste explicabo nostrum porro. Sit quae, odit excepturi in nostrum sunt
          error blanditiis at alias provident?
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil velit
          omnis dolorum repellat? Accusamus, nihil exercitationem vero
          recusandae quas soluta ipsam quia atque hic deleniti dolore
          consequuntur quibusdam, impedit quisquam, dolor sapiente sunt saepe
          iste explicabo nostrum porro.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
