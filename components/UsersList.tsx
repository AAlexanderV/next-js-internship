import styles from "@/styles/UsersPage.module.scss";
import { FC } from "react";
import { UsersListProps } from "../types";
import { UserCard } from "./UserCard";

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <div className={styles.users_list}>
      <div className={styles.grid_wrapper}>
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
