import { Header } from "./Header";
import { Footer } from "./Footer";

// import type { Component } from "next/app";
import { FC } from "react";

export const Layout: FC = ({ children }: any) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
