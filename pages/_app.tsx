// import { FC } from "react";
import { NextPage } from "next";

import "@/styles/globals.scss";
import { Layout } from "../components/Layout";
import type { AppProps } from "next/app";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
};

export default App;
