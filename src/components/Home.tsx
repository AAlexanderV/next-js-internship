import { FC } from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <h3>Welcome to the users list app.</h3>
      <Link href="/users/1">Click here to see all users &#8592;</Link>
    </div>
  );
};
