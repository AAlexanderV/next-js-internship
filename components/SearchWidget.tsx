"use client";
import styles from "@/styles/SearchWidget.module.scss";
import { useState, useEffect } from "react";
import { FC } from "react";
import { User } from "../types";
import { SuggestedUserItem } from "./SuggestedUserItem";
import { svgSearchPath } from "../utils/svgSearchPath";

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
            <path d={svgSearchPath} />
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

      <div className={styles.suggested_users}>
        {users.map((user) => {
          return (
            <SuggestedUserItem
              key={user.id}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
};
