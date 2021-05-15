import React from "react";
import Head from "next/head";

import Link from "./Link";
import Text from "./Text";

type Props = {
  children: React.ReactNode;
  containerClassName?: string;
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
      </Head>
      <div className="min-h-screen flex flex-row-reverse">
        <div className="flex flex-col px-4 xl:px-8 max-w-3xl xl:max-w-4xl 2xl:max-w-6xl">
          <header className="pt-8 xl:pt-10 2xl:pt-12">
            <nav>
              {routes.map((route) => (
                <Link href={route.url} key={route.url} className="mr-3">
                  {route.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="flex flex-1 flex-col">{children}</main>
          <footer className="py-4">
            <Text className="text-xs">
              Unless otherwise stated, all{" "}
              <Link href="https://github.com/simka/simka.dev">source code</Link>{" "}
              is licensed under{" "}
              <Link href="https://www.gnu.org/licenses/agpl-3.0.en.html">
                GNU AGPL version 3.0 or later
              </Link>{" "}
              and all other content is licensed under{" "}
              <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International (CC BY-NC-SA 4.0)
              </Link>
            </Text>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Layout;
