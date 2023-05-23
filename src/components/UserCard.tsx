import styles from "@/styles/UsersPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { UserCardProps } from "../../types";

export const UserCard = ({ id, firstName, lastName, image }: UserCardProps) => {
  return (
    <Link href={"/user/" + id}>
      <div className={styles.user_item}>
        <div className="user_img">
          <Image
            src={image}
            width={100}
            height={100}
            alt={firstName + " " + lastName}
          />
        </div>

        <div className={styles.user_details}>
          <h3>{firstName + " " + lastName}</h3>
        </div>
      </div>
    </Link>
  );
};
