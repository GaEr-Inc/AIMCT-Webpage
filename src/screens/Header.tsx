import React from "react";
import { Header as MantineHeader } from "@mantine/core";
function Header() {
  return (
    <MantineHeader
      style={{ backgroundColor: "rgba(17, 24, 39, 0.8)"}}
      height={85}
    >
      <h1>Header</h1>
    </MantineHeader>
  );
}

export default Header;
