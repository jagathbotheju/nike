"use client";
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  shoe: {
    thumbnail: string;
    bigShoe: string;
  };
  setBigShoeImage: Dispatch<SetStateAction<string>>;
  bigShoeImage: string;
}

const ShoeCard = ({ shoe, setBigShoeImage, bigShoeImage }: Props) => {
  return (
    <div
      className={`border-4 rounded-xl cursor-pointer bg-slate-400 ${
        bigShoeImage === shoe.bigShoe && "border-orange-500"
      }`}
      onClick={() => setBigShoeImage(shoe.bigShoe)}
    >
      <Image src={shoe.thumbnail} alt="shoe" width={120} height={120} />
    </div>
  );
};

export default ShoeCard;
