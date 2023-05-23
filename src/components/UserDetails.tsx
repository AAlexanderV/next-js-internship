import styles from "@/styles/UserDetails.module.scss";

import Image from "next/image";

export const UserDetails = ({
  firstName,
  lastName,
  gender,
  address,
  image,
}: {
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  image: string;
}) => {
  return (
    <div className={styles.user_container}>
      <div className={styles.user_item}>
        <div className={styles.user_avatar}>
          <Image
            src={image}
            width={200}
            height={200}
            alt={firstName + " " + lastName}
          />
        </div>

        <div className={styles.user_info}>
          <h2>{firstName + " " + lastName}</h2>
          <p>
            <span>Gender: </span> {gender}
          </p>
          <p>
            <span>Address: </span> {address}
          </p>
        </div>
      </div>
    </div>
  );
};
