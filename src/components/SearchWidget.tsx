"use client";
import styles from "@/styles/SearchWidget.module.scss";
import { useState, useEffect } from "react";
import { FC } from "react";
import { User } from "../../types";
import { SuggestedUserItem } from "./SuggestedUserItem";

export const SearchWidget: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchName, setSearchName] = useState<string>("");

  useEffect(() => {
    if (searchName) {
      fetch(`https://dummyjson.com/users/search?limit=10&q=${searchName}`)
        .then((response) => response.json())
        .then(
          (data) => {
            setUsers(data.users ? data.users : []);
          },
          (err) => {
            console.log("response/request ERROR in SearchWidget: ", err);
            setUsers([]);
          }
        );
    } else setUsers([]);
  }, [searchName]);

  return (
    <div className={styles.search}>
      <div className={styles.input_box}>
        <label htmlFor="search">
          <svg className={styles.search_svg}>
            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" />
          </svg>
        </label>

        <input
          className={styles.search_input}
          type="text"
          id="search"
          value={searchName}
          placeholder="search users"
          onChange={(e) => setSearchName(e.target.value)}
        ></input>
      </div>

      {users.length > 0 && (
        <div className={styles.suggested_users}>
          {users.map((user: User) => {
            return (
              <SuggestedUserItem
                key={user.id}
                id={user.id}
                fullName={user.firstName + " " + user.lastName}
                image={user.image}
                removeSuggestions={() => {
                  setUsers([]);
                  setSearchName("");
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
