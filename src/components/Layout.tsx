import React from "react";
import Head from "next/head";
import cx from "classnames";

import Copyright from "./Copyright";
import Navigation from "./Navigation";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const routes = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "log",
    url: "/log",
  },
  {
    label: "watching",
    url: "https://letterboxd.com/mcjsimka/",
  },
  {
    label: "reading",
    url: "https://www.goodreads.com/simka",
  },
];

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        {process.env.NODE_ENV !== "development" ? (
          <script
            data-goatcounter="https://simka.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
        ) : null}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👹</text></svg>"
        />
      </Head>
      <div
        className={cx(
          "grid",
          "grid-cols-7",
          "max-w-7xl",
          "min-h-screen",
          styles.gridWrapper
        )}
      >
        <header
          className={cx(
            "col-span-7",
            "lg:col-span-1",
            "lg:row-span-2",
            "p-5",
            "row-span-1",
          )}
        >
          <Navigation routes={routes} />
        </header>
        <main
          className={cx("col-span-7", "lg:col-span-6", "lg:row-span-2", "p-5")}
        >
          {children}
        </main>
        <footer className={cx("col-span-7", "p-5")}>
          <Copyright />
        </footer>
      </div>
    </>
  );
}

export default Layout;
