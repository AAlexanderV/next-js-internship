import { FC } from "react";
import Link from "next/link";

const HomePage: FC = () => {
  return (
    <div className="w-full flex flex-col justify-around items-center mt-24">
      <h3 className="font-normal mb-12">Welcome to some awesome app</h3>
      <Link
        className="p-9 bg-light_blue rounded hover:bg-opacity-50 transition-colors duration-200 ease-linear font-bold text-2xl"
        href="/users/1"
      >
        Click here to see all users &#8592;
      </Link>
    </div>
  );
};

export default HomePage;
