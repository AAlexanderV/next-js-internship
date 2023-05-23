import styles from "@/styles/Pagination.module.scss";
import Link from "next/link";
import { PaginationProps } from "../../types";

export const Pagination = ({ pagesTotal, currentPage }: PaginationProps) => {
  const paginationMap = [];

  for (let i = 1; i <= pagesTotal; i++) {
    // for right skipping ...
    if (i === pagesTotal && (pagesTotal - currentPage) / 2 > 1) {
      const href = "/users/" + Math.round((pagesTotal + currentPage) / 2);
      paginationMap.push({ pageValue: ". . .", href, toRemove: false });
    }

    // for pagination items [1,2,3 ...]
    const toRemove =
      i !== 1 && i !== pagesTotal && (i < currentPage - 1 || i > currentPage + 1) ? true : false;
    paginationMap.push({ pageValue: i, href: "/users/" + i, toRemove });

    // for left skipping ...
    if (i === 1 && (currentPage - 1) / 2 > 1) {
      const href = "/users/" + Math.round((currentPage - 1) / 2);
      paginationMap.push({ pageValue: ". . .", href, toRemove: false });
    }
  }

  return (
    <div className={styles.pagination_container}>
      {paginationMap.map((pageItem, i) => {
        return (
          <Link
            href={pageItem.href}
            className={
              (pageItem.toRemove ? styles.remove_element : "") +
              (pageItem.pageValue === currentPage ? styles.current_page : "")
            }
            key={i}
          >
            <div>{pageItem.pageValue}</div>
          </Link>
        );
      })}
    </div>
  );
};
