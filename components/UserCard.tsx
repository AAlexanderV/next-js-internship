import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { UserCardProps } from "../types";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const fullName = user.firstName + " " + user.lastName;

  return (
    <Link href={"/user/" + user.id}>
      <div className="w-full h-[244px] rounded-md transition-all duration-300 flex flex-col items-center justify-evenly hover:scale-105 hover:rotate-3 shadow-md">
        <div>
          <Image
            src={user.image}
            width={100}
            height={100}
            alt={fullName}
          />
        </div>

        <div className="w-full h-1/3 flex flex-col justify-evenly py-2.5 px-4">
          <h3 className="font-medium text-[12px] text-center sm:text-base">{fullName}</h3>
        </div>
      </div>
    </Link>
  );
};
