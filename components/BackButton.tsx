import styles from "@/styles/BackButton.module.scss";
import Link from "next/link";

export const BackButton = () => {
  return (
    <div className={styles.back_section}>
      <Link
        href="/users/1"
        className={styles.back_btn}
      >
        <span className={styles.arrow}>
          <svg
            width="16"
            height="16"
          >
            <path
              d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
              fill="black"
            />
          </svg>
        </span>
        BACK TO USERS LIST
      </Link>
    </div>
  );
};
