import React from "react";

import Link from "./Link";
import Text from "./Text";

function Copyright() {
  return (
    <Text>
      Unless otherwise stated, all{" "}
      <Link href="https://github.com/simka/simka.dev">source code</Link> is
      licensed under{" "}
      <Link href="https://www.gnu.org/licenses/agpl-3.0.en.html">
        GNU AGPL version 3.0 or later
      </Link>{" "}
      and all other content is licensed under{" "}
      <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
        (CC BY-NC-SA 4.0)
      </Link>
    </Text>
  );
}

export default Copyright;
