import { reviews } from "@/lib/constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="flex p-5 flex-col lg:px-32 bg-gray-100 mt-10">
      <h2 className="font-bold text-center text-4xl">
        What our <span className="text-orange-500">Customers</span> say?
      </h2>
      <p className="mt-2 text-slate-500 text-center">
        Here genuine stories from our satisfied customers about their
        exceptional experience with us
      </p>

      <div className="mt-16 flex flex-1 justify-evenly items-center lg:flex-col gap-10">
        {reviews.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
