import { FC } from "react";
import { User } from "../../types";
import { UserItem } from "../components/UserItem";

export const UsersList: FC<{ users: User[] }> = ({ users }: { users: User[] }) => {
  return (
    <div className="users_list">
      <div className="grid_wrapper">
        {users.map((user) => {
          return (
            <UserItem
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              gender={user.gender}
              address={user.address.address + ", " + user.address.city}
              image={user.image}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};
