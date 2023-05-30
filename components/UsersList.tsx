import { FC } from "react";
import { UsersListProps } from "../types";
import { UserCard } from "./UserCard";

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <div className="w-full h-fit my-10 mx-0 py-0 px-8">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row-dense gap-5">
        {users.map((user) => (
          <UserCard
            user={user}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};
