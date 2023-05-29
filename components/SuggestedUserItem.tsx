import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { SuggestedUserItemProps } from "../types";

export const SuggestedUserItem: FC<SuggestedUserItemProps> = ({ user }) => {
  const fullName = user.firstName + " " + user.lastName;

  return (
    <Link
      href={"/user/" + user.id}
      className="flex flex-row items-center border-[1px] border-gray-300 rounded-sm p-2.5 hover:bg-gray-300 transition-colors duration-200"
    >
      <Image
        src={user.image}
        width={30}
        height={30}
        alt={fullName}
      />
      <p className="ml-2.5">{fullName}</p>
    </Link>
  );
};
