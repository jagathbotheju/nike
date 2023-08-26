import Image from "next/image";
import { Button } from "./ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";

const SpecialOffer = () => {
  return (
    <div className="flex w-full px-5 lg:px-32 lg:flex-row flex-col">
      <div className="flex flex-1">
        <Image
          src="/assets/images/offer.svg"
          alt="offer"
          width={400}
          height={500}
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-500">Special</span> Offer
        </h2>
        <p className="mt-4 text-slate-500 text-justify">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 text-slate-500 text-justify">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-x-3 mt-10">
          <Button className="bg-orange-500 gap-x-2 rounded-3xl">
            Show Now
            <div className="rounded-full w-[20px] h-[20px] bg-white flex justify-center items-center">
              <AiOutlineArrowRight
                size={20}
                className="text-orange-500 font-bold"
              />
            </div>
          </Button>

          <Button variant="outline" className="text-slate-500 rounded-3xl">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
