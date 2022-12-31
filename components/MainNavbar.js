import React from 'react'
import { Button, Container, Navbar, Text, Link } from "@nextui-org/react";
import { Layout } from "../components/Layout";

const MainNavbar = () => {
  return (
    <Layout>
        <Navbar
          maxWidth="fluid"
          variant="sticky"
          css={{ backgroundColor: "#F1F3F5" }}
        >
          <Navbar.Brand>
            <Link href='/' scroll='true'>
            <Text h1>
              Evan E.
            </Text>
            </Link>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link href="#">Talks</Navbar.Link>
            <Navbar.Link href="#">Writing</Navbar.Link>
            <Navbar.Link href="/Web" scroll='true'>Web</Navbar.Link>
            <Navbar.Link href="#">Photography</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Button bordered color="gradient">
              Contact
            </Button>
          </Navbar.Content>
        </Navbar>
      </Layout>
  )
}

export default MainNavbar