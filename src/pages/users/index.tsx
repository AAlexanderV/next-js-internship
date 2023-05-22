// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { SearchWidget } from "../../components/SearchWidget";

// import type { InferGetStaticPropsType, GetStaticProps } from "next";

// type User = {
//   id: number;
//   firstName: string;
//   lastName: string;
// };

// export const getStaticProps: GetStaticProps<{
//   repo: User[];
// }> = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();
//   return { props: { repo } };
// };

const UsersPage = () => {
  return (
    <>
      <SearchWidget />
      {/* Сделать редирект на page 1 ? */}
    </>
  );
};

export default UsersPage;
