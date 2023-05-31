import { FC, ReactElement } from "react";
import { PaginationProps } from "../types";
import { createPaginationMap } from "../utils/paginationUtils";

export const Pagination: FC<PaginationProps> = ({ pagesTotal, currentPage }) => {
  const paginationMap = createPaginationMap(pagesTotal, currentPage);

  return (
    <div className="w-full flex justify-center items-center mb-12">
      {paginationMap.map((pageElement): ReactElement => pageElement)}
    </div>
  );
};
