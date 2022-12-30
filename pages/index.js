import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Button, Container, Navbar, Text } from "@nextui-org/react";
import { Layout } from "../components/Layout";
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Evan Emenegger</title>
        <meta name="description" content="Evan Emenegger Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar maxWidth='fluid' variant="sticky" css={{ backgroundColor: "#F1F3F5" }}>
          <Navbar.Brand>
            <Text h1>Evan E.</Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link href="#">Talks</Navbar.Link>
            <Navbar.Link href="#">Writing</Navbar.Link>
            <Navbar.Link href="#">Web</Navbar.Link>
            <Navbar.Link href="#">Photography</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Button bordered color='gradient'>Contact</Button>
          </Navbar.Content>
        </Navbar>
      </Layout>
    </>
  );
}
