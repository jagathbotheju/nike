"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { statistics, shoes } from "../lib/constants";
import ShoeCard from "@/components/ShoeCard";
import { useState } from "react";
import bigShoe1 from "../public/assets/images/big-shoe1.png";

const HeroSection = () => {
  const [bigShoeImage, setBigShoeImage] = useState(
    "/assets/images/big-shoe1.png"
  );

  return (
    <section className="flex flex-col lg:flex-row w-full justify-center">
      {/* left */}
      <div className="flex flex-col justify-center items-start lg:w-1/2 pl-5 lg:pl-32 mt-24">
        <p className="text-xl text-orange-500 py-5">Our Summer Collection</p>
        <h1 className="text-6xl lg:text-8xl font-bold">
          <span className="md:bg-white relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-orange-500 inline-block">Nike</span> Shoes
        </h1>
        <p className="text-slate-500 leading-8 mt-6 mb-14 flex flex-wrap">
          Discover stylish Nike arrivals, quality, comfort, and innovation for
          your active life
        </p>
        <Button className="rounded-full bg-orange-500 hover:bg-orange-700 hover:shadow-lg">
          Shop Now
          <AiOutlineArrowRight size={20} className="ml-2" />
        </Button>

        {/* stats */}
        <div className="flex justify-start items-start w-full flex-wrap mt-20 gap-20">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{item.value}</p>
              <p className="font-semibold text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="flex relative justify-center items-center lg:w-1/2 bg-center bg-cover bg-slate-100 pr-5 lg:pr-32">
        <Image
          src={bigShoeImage}
          width={600}
          height={500}
          alt="shoe"
          className="object-contain relative"
        />

        {/* shoe cards */}
        <div className="flex gap-x-5 absolute -bottom-14 right-10">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              shoe={shoe}
              setBigShoeImage={setBigShoeImage}
              bigShoeImage={bigShoeImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
