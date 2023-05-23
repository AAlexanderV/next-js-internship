import { PaginationProps } from "../types";

export function createPaginationMap(pagesTotal: number, currentPage: number) {
  const paginationMap = [];

  for (let i = 1; i <= pagesTotal; i++) {
    // for right skipping ...
    if (i === pagesTotal && (pagesTotal - currentPage) / 2 > 1) {
      paginationMap.push({ href: "" + i, pageValue: ". . ." });
    }

    // for pagination items [1,2,3 ...]
    const toRemove = i !== 1 && i !== pagesTotal && (i < currentPage - 1 || i > currentPage + 1);

    paginationMap.push({ pageValue: i, href: "/users/" + i, toRemove });

    // for left skipping ...
    if (i === 1 && (currentPage - 1) / 2 > 1) {
      paginationMap.push({ href: "" + i, pageValue: ". . ." });
    }
  }

  return paginationMap;
}
