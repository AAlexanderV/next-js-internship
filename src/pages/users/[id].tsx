// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { SearchWidget } from "../../components/SearchWidget";
import { UsersList } from "../../components/UsersList";
import { UserItem } from "../../components/UserItem";

import { User, PageData, IParams } from "../../../types";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{
  pageData: PageData;
}> = async (context) => {
  const { id } = context.params as IParams;
  // const { id } = context.query; //????

  const response = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${(Number(id) - 1) * 10}`
  );
  const pageData = await response.json();

  return { props: { pageData } };
};

//
////
//

const UsersPage = ({ pageData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SearchWidget />
      <UsersList users={pageData.users} />
    </>
  );
};

export default UsersPage;
