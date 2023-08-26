import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "./ui/button";
import Image from "next/image";

const SuperQualitySection = () => {
  return (
    <section className="flex w-full px-5 lg:px-32 my-16 flex-col lg:flex-row items-start lg:justify-center">
      {/* left */}
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold">
          <span className="md:bg-white relative z-10 pr-10">
            We Provide You
          </span>
          <br />
          <span className="text-orange-500 inline-block">
            Super Quality
          </span>{" "}
          Shoes
        </h1>
        <p className="text-slate-500 leading-8 mt-6 mb-14 flex flex-wrap text-justify">
          Discover stylish Nike arrivals, quality, comfort, and innovation for
          your active life. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Dolores optio minima quisquam, quaerat, labore perspiciatis
          reiciendis unde error alias tempora sapiente, dicta officia
          repellendus! Atque ipsum dolore eveniet nihil rerum?
        </p>
        <Button className="rounded-full bg-orange-500 hover:bg-orange-700 hover:shadow-lg w-fit">
          Shop Now
          <AiOutlineArrowRight size={20} className="ml-2" />
        </Button>
      </div>

      {/* right */}
      <div className="flex w-full lg:w-1/2 items-center">
        <Image
          src="/assets/images/shoe8.svg"
          alt="shoe"
          width={570}
          height={570}
        />
      </div>
    </section>
  );
};

export default SuperQualitySection;
