// import { FC } from "react";
import { NextPage } from "next";
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

const UserPage: NextPage<{ user: User }> = ({ user }) => {
  return (
    <>
      <BackButton />

      <UserDetails user={user} />
    </>
  );
};

export default UserPage;
