import Image from "next/image";

interface Props {
  review: {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
  };
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col w-1/2">
      <Image
        src={review.imgURL}
        alt={review.customerName}
        width={100}
        height={100}
        className="object-cover rounded-full w-[100px] h-[100px]"
      />
      <p className="text-slate-500 text-center">{review.feedback}</p>

      <div className="flex items-center gap-x-2">
        <Image src="/assets/icons/star.svg" alt="star" width={20} height={20} />
        <p className="text-slate-500 font-semibold">{review.rating}</p>
      </div>
      <h3 className="text-lg font-bold text-slate-600">
        {review.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
