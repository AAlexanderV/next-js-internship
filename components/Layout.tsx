import { FC } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

// export const Layout: FC<{ children: FC }> = ({ children }) => {
export const Layout: FC<any> = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
