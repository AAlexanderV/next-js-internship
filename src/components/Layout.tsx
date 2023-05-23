import { Header } from "./Header";
import { Footer } from "./Footer";

// import type { Component } from "next/app";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
