import { SearchWidget } from "../../components/SearchWidget";
import { BackButton } from "../../components/BackButton";
import { UserDetails } from "../../components/UserDetails";

import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";

import { User, IParams } from "../../../types";

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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ user: User }> = async (context) => {
  const { id } = context.params as IParams;

  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await response.json();

  return { props: { user }, revalidate: 60 };
};

const UserPage = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SearchWidget />
      <BackButton />

      <UserDetails
        firstName={user.firstName}
        lastName={user.lastName}
        gender={user.gender}
        address={user.address.address + ", " + user.address.city}
        image={user.image}
      />
    </>
  );
};

export default UserPage;
