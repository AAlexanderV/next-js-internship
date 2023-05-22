// import Image from "next/image";
import { SearchWidget } from "../../components/SearchWidget";

import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type Users = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const response = await fetch("https://dummyjson.com/users?limit=100");
  const data = await response.json();

  const paths = data.users.map(({ id }: { id: number }) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: "blocking", // false or "blocking" ?
  };
};

///

export const getStaticProps: GetStaticProps<{ user: User }> = async (context) => {
  const { id } = context.params as IParams;

  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();

  return { props: { user }, revalidate: 60 };
};

//
////
//

const UsersPage = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SearchWidget />
      <p>{user.firstName + " " + user.lastName}</p>
    </>
  );
};

export default UsersPage;
