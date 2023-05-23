import { SearchWidget } from "../../components/SearchWidget";
import { UsersList } from "../../components/UsersList";
import { Pagination } from "../../components/Pagination";

import { PageData, IParams } from "../../../types";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{
  pageData: PageData;
  currentPage: number;
}> = async (context) => {
  const { id } = context.params as IParams;
  // const { id } = context.query; //????

  const response = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${(Number(id) - 1) * 10}`
  );
  const pageData = await response.json();

  return { props: { pageData, currentPage: Number(id) } };
};

const UsersPage = ({
  pageData,
  currentPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
