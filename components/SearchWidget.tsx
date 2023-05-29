"use client";

import { FC, useEffect, useState } from "react";
import { User } from "../types";
import { svgSearchPath } from "../utils/svgPaths";
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
    <div className="w-full flex items-center justify-center relative">
      <div className="w-3/5 max-w-xl min-w-[200px] h-14 mt-8 flex flex-row content-start items-center bg-white border border-gray-400 rounded-lg">
        <label htmlFor="search">
          <svg className="h-4 w-4 mt-1 mr-1.5 mb-0 ml-5 fill-gray-400">
            <path
              d={svgSearchPath}
              stroke="grey"
            />
          </svg>
        </label>

        <input
          className="w-full h-14 border-none bg-transparent ml-2 text-gray-500 text-lg font-normal"
          type="text"
          id="search"
          value={searchName}
          placeholder="search users"
          onChange={(e) => setSearchName(e.target.value)}
        ></input>
      </div>

      <div className="absolute top-[90px] w-3/5 max-w-[600px] min-w-[200px] z-10 bg-white">
        {users.map((user) => (
          <SuggestedUserItem
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  );
};
