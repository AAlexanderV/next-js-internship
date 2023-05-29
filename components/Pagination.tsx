import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { PaginationProps } from "../types";
import { createPaginationMap } from "../utils/paginationUtils";

export const Pagination: FC<PaginationProps> = ({ pagesTotal, currentPage }) => {
  const paginationMap = createPaginationMap(pagesTotal, currentPage);

  return (
    <div className="w-full flex justify-center items-center mb-12">
      <Link
        href={"/users/" + (currentPage - 1)}
        className={clsx("mr-1 text-2xl font-extrabold hover:scale-125 transition-all", {
          "pointer-events-none text-gray-200 ": currentPage <= 1,
        })}
      >
        &#60;
      </Link>

      {paginationMap.map((pageItem, i) => {
        if (pageItem.pageValue === ". . .") {
          return (
            <div
              className=" text-xl font-bold"
              key={i}
            >
              {pageItem.pageValue}
            </div>
          );
        }

        return (
          <Link
            href={pageItem.href}
            className={clsx("m-2", {
              hidden: pageItem.toRemove,
              "text-gray-100 border-4 border-light_blue rounded-lg":
                pageItem.pageValue === currentPage,
            })}
            key={i}
          >
            <div className="w-9 h-9 flex justify-center items-center text-center rounded-[3px] bg-gray-300 text-lg font-bold">
              {pageItem.pageValue}
            </div>
          </Link>
        );
      })}

      <Link
        href={"/users/" + (currentPage + 1)}
        className={clsx("ml-1 text-2xl font-extrabold hover:scale-125 transition-all", {
          "pointer-events-none text-gray-200": currentPage >= pagesTotal,
        })}
      >
        &#62;
      </Link>
    </div>
  );
};
