import { FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ComponentChildren } from "../types";

export const Layout: FC<ComponentChildren> = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
