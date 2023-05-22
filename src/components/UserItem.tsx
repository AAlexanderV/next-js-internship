// import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const UserItem = ({
  id,
  firstName,
  lastName,
  gender,
  address,
  image,
}: {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  image: string;
}) => {
  return (
    <Link href={"/user/" + id}>
      <div className="user_item">
        <div className="user_img">
          <Image
            src={image}
            width={100}
            height={100}
            alt={firstName + " " + lastName}
          />
        </div>

        <div className="user_details">
          <h3>{firstName + " " + lastName}</h3>
          <p>Gender: {gender}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    </Link>
  );
};
