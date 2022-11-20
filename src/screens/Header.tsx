import React from "react";
import {
  Flex,
  Group,
  Header as MantineHeader,
  Image,
  Text,
  UnstyledButton,
} from "@mantine/core";
import logo from "../assets/logo.png";
import NavButton from "../components/NavButton";
function Header() {
  return (
    <MantineHeader
      style={{ backgroundColor: "rgba(117, 117, 117)", border: "none" }}
      height={75}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image src={logo} width={100} sx={{ marginLeft: "2%" }} />
        <Flex
          gap="md"
          justify="flex-start"
          align="center"
          direction="row-reverse"
          wrap="nowrap"
        >
          {/* <NavButton>Hola</NavButton> */}
          <NavButton>Contacto</NavButton>
          <NavButton>Nosotros</NavButton>
          <NavButton>Servicios</NavButton>
          <NavButton>Inicio</NavButton>
        </Flex>
      </div>
    </MantineHeader>
  );
}

export default Header;
