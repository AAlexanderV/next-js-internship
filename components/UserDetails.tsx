import styles from "../styles/UserDetails.module.scss";
import Image from "next/image";
import { FC } from "react";
import { UserDetailsProps } from "../types";

export const UserDetails: FC<UserDetailsProps> = ({ user }) => {
  const fullName = user.firstName + " " + user.lastName;
  const address = user.address.address + ", " + user.address.city;

  return (
    <div className="w-full flex justify-center mt-24">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-10">
          <Image
            src={user.image}
            width={200}
            height={200}
            className="rounded-full border-[1px] border-gray-300"
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
