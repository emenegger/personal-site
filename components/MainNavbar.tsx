import { Button, Link } from "@nextui-org/react";
import {
  NavbarContent,
  NavbarBrand,
  Navbar,
} from "@nextui-org/navbar";

const MainNavbar = () => {
  return (
    <Navbar
      position="sticky"
    >
      <NavbarBrand>
        <Link href="/">
          <h1>Evan E.</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <Link href="/Projects" style={{ color: "black" }}>
          Web
        </Link>
        <Link href="/Photography" style={{ color: "black" }}>
          Photography
        </Link>
      </NavbarContent>
      <NavbarContent>
        <Link href="/Contact">
          <Button>Contact</Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
