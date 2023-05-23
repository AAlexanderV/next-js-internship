import styles from "@/styles/Pagination.module.scss";
import Link from "next/link";
import { createPaginationMap } from "../utils/paginationUtils";
import { PaginationProps } from "../types";

export const Pagination = ({ pagesTotal, currentPage }: PaginationProps) => {
  const paginationMap = createPaginationMap(pagesTotal, currentPage);

  return (
    <div className={styles.pagination_container}>
      {paginationMap.map((pageItem, i) => {
        if (pageItem.pageValue === ". . .") {
          return <div key={i}>{pageItem.pageValue}</div>;
        }

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
