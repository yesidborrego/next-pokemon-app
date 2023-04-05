import { FC } from "react";
import Head from "next/head";
import { Navbar } from "@/components";
import { LayoutProps } from "@/interfaces";

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title = "App" }) => {
  return (
    <>
      <Head>
        <title>Pokemon {title}</title>
        <meta name="author" content="Yesid Borrego" />
        <meta
          name="description"
          content={`Information about the Pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This is the page of ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "10px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
