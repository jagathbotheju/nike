import Image from "next/image";

interface Props {
  product: {
    imgURL: string;
    name: string;
    price: string;
  };
}

const PopularProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full items-center">
      <Image src={product.imgURL} width={280} height={280} alt={product.name} />
      <div className="mt-2 flex justify-start gap-2.5 items-center">
        <Image src="/assets/icons/star.svg" width={24} height={24} alt="star" />
        <p className="text-slate-500 font-semibold">4.5</p>
      </div>
      <h3 className="mt-1 text-xl font-semibold">{product.name}</h3>
      <p className="font-semibold text-orange-500">{product.price}</p>
    </div>
  );
};

export default PopularProductCard;
