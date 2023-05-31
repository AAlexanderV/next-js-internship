import Link from "next/link";
import { svgArrow } from "../utils/svgPaths";

export const BackButton = () => {
  return (
    <div>
      <Link
        href="/users/1"
        className="mt-10 ml-14 bg-white font-bold flex flex-row"
      >
        <span className="mr-3 flex items-center">
          <svg
            width="16"
            height="16"
          >
            <path
              d={svgArrow}
              fill="black"
            />
          </svg>
        </span>
        BACK TO USERS LIST
      </Link>
    </div>
  );
};
