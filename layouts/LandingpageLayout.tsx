import React, { ReactNode } from "react";
import Head from "next/head";
import { Footer, Header } from "@/components";

interface MainLayoutProps {
  pageTitle?: string;
  children: ReactNode;
}

const LandingpageLayout = ({ pageTitle, children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{`Efe A. Gift Portifolio - ${pageTitle}`}</title>
        <meta
          name="description"
          content="I am a committed Software Engineer concentrating on Frontend Development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/logo.svg" sizes="1088x468" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default LandingpageLayout;
