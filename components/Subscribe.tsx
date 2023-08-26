import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Subscribe = () => {
  return (
    <section className="px-5 lg:px-32 flex mx-auto">
      <div className="p-10 flex flex-col justify-center mt-10">
        <h3 className="text-4xl font-bold">
          Sign up for <span className="text-orange-500">Updates</span> &
          Newsletter
        </h3>

        <div className="flex mt-10 items-center space-x-2">
          <Input
            className="rounded-3xl focus:outline-none"
            type="text"
            placeholder="subscribe@nike.com"
          />
          <Button className="bg-orange-500 rounded whitespace-nowrap">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
