import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "../types";

import styles from "@/styles/SearchWidget.module.scss";

export const SuggestedUserItem: FC<{ user: User }> = ({ user }) => {
  const fullName = user.firstName + " " + user.lastName;

  return (
    <Link
      href={"/user/" + user.id}
      className={styles.suggested_user_item}
    >
      <Image
        src={user.image}
        width={30}
        height={30}
        alt={fullName}
      />
      <p className={styles.fullName}>{fullName}</p>
    </Link>
  );
};
