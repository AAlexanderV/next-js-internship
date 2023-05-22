import { FC } from "react";
import Link from "next/link";

export const Home: FC = () => {
  return (
    <div>
      <h2>Welcome to the users list app.</h2>
      <Link href="/users">See all users</Link>
    </div>
  );
};
