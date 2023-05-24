// import { NextPage } from "next";
import { FC } from "react";
import { BackButton } from "../../components/BackButton";
import { UserDetails } from "../../components/UserDetails";
import type { GetServerSideProps } from "next";
import { User } from "../../types";

export const getServerSideProps: GetServerSideProps<{ user: User }> = async (context) => {
  const { id } = context.query;

  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await response.json();

  return { props: { user } };
};

const UserPage: FC<{ user: User }> = ({ user }) => {
  return (
    <>
      <BackButton />

      <UserDetails user={user} />
    </>
  );
};

export default UserPage;
