import { FC } from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

const HomePage: FC = () => {
  return (
    <div className={styles.container}>
      <h3 className="font-normal mb-12">Welcome to some awesome app</h3>
      <Link
        className={styles.btn}
        href="/users/1"
      >
        Click here to see all users &#8592;
      </Link>
    </div>
  );
};

export default HomePage;
