import { FC } from "react";
import { SearchWidget } from "../../components/SearchWidget";
import { UsersList } from "../../components/UsersList";
import { Pagination } from "../../components/Pagination";
import { UsersPageProps } from "../../types";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<UsersPageProps> = async (context) => {
  const { id } = context.query;

  const response = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${(Number(id) - 1) * 10}`
  );
  const pageData = await response.json();

  return { props: { pageData, currentPage: Number(id) } };
};

const UsersPage: FC<UsersPageProps> = ({ pageData, currentPage }) => {
  return (
    <>
      <SearchWidget />

      <UsersList users={pageData.users} />

      <Pagination
        pagesTotal={pageData.total / pageData.limit}
        currentPage={currentPage}
      />
    </>
  );
};

export default UsersPage;
