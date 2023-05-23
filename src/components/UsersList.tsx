import { FC } from "react";
import styles from "@/styles/UsersPage.module.scss";
import { User } from "../../types";
import { UserCard } from "./UserCard";

export const UsersList: FC<{ users: User[] }> = ({ users }: { users: User[] }) => {
  return (
    <div className={styles.users_list}>
      <div className={styles.grid_wrapper}>
        {users.map((user) => {
          return (
            <UserCard
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              gender={user.gender}
              image={user.image}
              key={user.id}
            />
          );
        })}
      </div>
    </div>
  );
};
