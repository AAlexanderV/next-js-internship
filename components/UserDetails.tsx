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

        <div>
          <h2 className="mb-8 text-center text-3xl">{fullName}</h2>
          <p className="mb-2">
            <span className="mr-1.5 font-bold text-gray-400">Gender: </span> {user.gender}
          </p>
          <p className="mb-2">
            <span className="mr-1.5 font-bold text-gray-400">Address: </span> {address}
          </p>
        </div>
      </div>
    </div>
  );
};
