import React, { useState } from "react";
import { Button, Container, Navbar, Text, Link } from "@nextui-org/react";
import { Layout } from "../components/Layout";
import Photography from "../pages/Photography";

const MainNavbar = () => {
  // const [active, setActive] = useState(false);

  return (
    <Layout>
      <Navbar
        maxWidth="fluid"
        variant="sticky"
        css={{ backgroundColor: "#F1F3F5" }}
      >
        <Navbar.Brand>
          <Link href="/" scroll="true">
            <Text h1>Evan E.</Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          {/* <Navbar.Link href="#">Talks</Navbar.Link>
            <Navbar.Link href="#">Writing</Navbar.Link> */}
          <Navbar.Link
            href="/Web"
            // isActive={active}
            scroll="true"
            // onClick={() => setActive(true)}
          >
            Web
          </Navbar.Link>
          <Navbar.Link href="/Photography">Photography</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Button bordered color="gradient">
            Contact
          </Button>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default MainNavbar;
