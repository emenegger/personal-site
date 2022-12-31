import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Button, Container, Navbar, Text } from "@nextui-org/react";
import { Layout } from "../components/Layout";
import Content from "../components/Content";
import MainNavbar from "../components/MainNavbar";
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
      
      <Content/>
    </>
  );
}
