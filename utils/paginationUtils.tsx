import clsx from "clsx";
import Link from "next/link";
import { ReactElement } from "react";

export function createPaginationMap(pagesTotal: number, currentPage: number): ReactElement[] {
  const paginationMap = [];

  // Button prev
  paginationMap.push(
    <Link
      href={"/users/" + (currentPage - 1)}
      className={clsx(
        "mr-1 text-2xl font-extrabold  hover:scale-125 transition-all",
        currentPage > 1 ? "text-light_blue" : "pointer-events-none text-gray-200 "
      )}
    >
      &#60;
    </Link>
  );

  for (let i = 1; i <= pagesTotal; i++) {
    const skipLeft = i !== 1 && i < currentPage - 1;
    const skipRight = i !== pagesTotal && i > currentPage + 1;

    // for left|right skipping - 1...678..10
    if (skipLeft || skipRight) {
      paginationMap.push(
        <div
          className=" text-xl font-bold"
          key={i}
        >
          . . .
        </div>
      );

      skipLeft ? (i = currentPage - 1) : (i = pagesTotal);
    }

    // for pages - 1,2,3...
    paginationMap.push(
      <Link
        href={"/users/" + i}
        className={clsx("m-2", {
          "text-gray-100 border-4 border-light_blue rounded-lg": i === currentPage,
        })}
        key={i}
      >
        <div className="w-9 h-9 flex justify-center items-center text-center rounded-[3px] bg-gray-300 text-lg font-bold">
          {i}
        </div>
      </Link>
    );
  }

  // Button next
  paginationMap.push(
    <Link
      href={"/users/" + (currentPage + 1)}
      className={clsx(
        "ml-1 text-2xl font-extrabold hover:scale-125 transition-all",
        currentPage < pagesTotal ? "text-light_blue" : "pointer-events-none text-gray-200"
      )}
    >
      &#62;
    </Link>
  );

  return paginationMap;
}
