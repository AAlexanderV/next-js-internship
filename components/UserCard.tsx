import { FC } from "react";
import styles from "@/styles/UsersPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { User } from "../types";

export const UserCard: FC<{ user: User }> = ({ user }) => {
  const fullName = user.firstName + " " + user.lastName;

  return (
    <Link href={"/user/" + user.id}>
      <div className={styles.user_item}>
        <div className="user_img">
          <Image
            src={user.image}
            width={100}
            height={100}
            alt={fullName}
          />
        </div>

        <div className={styles.user_details}>
          <h3>{fullName}</h3>
        </div>
      </div>
    </Link>
  );
};
