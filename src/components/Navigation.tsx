import React from "react";

import { routes } from "../routes";
import Link from "./Link";

function Navigation() {
  return (
    <nav className="flex flex-row lg:flex-col space-x-3 lg:space-x-0">
      {routes.map((route) => (
        <Link href={route.url} key={route.url} className="lg:mb-3">
          {route.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
