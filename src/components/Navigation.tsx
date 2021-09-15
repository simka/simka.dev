import React from "react";
import cx from "classnames";

import { routes } from "../routes";
import Link from "./Link";

function Navigation() {
  return (
    <nav
      className={cx(
        "flex",
        "flex-row",
        "lg:flex-col",
        "space-x-3",
        "lg:space-x-0"
      )}
    >
      {routes.map((route) => (
        <Link href={route.url} key={route.url} className={cx("lg:mb-3")}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
