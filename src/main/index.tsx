import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* default meta */}
      <Head>
        <title>My App</title>
        <meta name="keywords" content="my-app" />
      </Head>
      {/* header */}
      {children}
      {/* footer */}
    </>
  );
};

export default Layout;
