import { FC } from "react";
import Image from "next/image";
import styles from "@/styles/UserDetails.module.scss";
import { User } from "../types";

export const UserDetails: FC<{ user: User }> = ({ user }: { user: User }) => {
  const fullName = user.firstName + " " + user.lastName;
  const address = user.address.address + ", " + user.address.city;

  return (
    <div className={styles.user_container}>
      <div className={styles.user_item}>
        <div className={styles.user_avatar}>
          <Image
            src={user.image}
            width={200}
            height={200}
            alt={fullName}
          />
        </div>

        <div className={styles.user_info}>
          <h2>{fullName}</h2>
          <p>
            <span>Gender: </span> {user.gender}
          </p>
          <p>
            <span>Address: </span> {address}
          </p>
        </div>
      </div>
    </div>
  );
};
