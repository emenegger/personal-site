import React, { useState } from "react";
import { Button, Container, Navbar, Text } from "@nextui-org/react";
import { Layout } from "../components/Layout";
import Photography from "../pages/Photography";
import Link from "next/link";

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
          <Link href="/" scroll>
            <Text h1>Evan E.</Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Link href="/Web" scroll style={{color: 'black'}}>
            Web
          </Link>
          <Link href="/Photography" scroll style={{color: 'black'}}>Photography</Link>
          {/* <Navbar.Link href="/Web">Web</Navbar.Link>
          <Navbar.Link href="/Photography">Photography</Navbar.Link> */}
          {/* <Navbar.Link href="#">Talks</Navbar.Link>
              <Navbar.Link href="#">Writing</Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Content>
          <Link href="/Contact" scroll>
            <Button bordered color="gradient" auto>
              Contact
            </Button>
          </Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
};

export default MainNavbar;
