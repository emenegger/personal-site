// import { Grid, Row, Text, Image } from "@nextui-org/react";
import Head from "next/head";
import React from "react";
import { cardContent } from "../public/cardContent";
import ProjectSquare from "../components/ProjectSquare";

const Projects = (props) => {
  // const { cardContent } = props;

  // const projects = cardContent.map((ele) => {
  //   return (
  //       <ProjectSquare data={ele} />
  //   );
  // });

  return (
    <>
      <Head>
        <title>Evan Emenegger - Web</title>
        <meta name="description" content="Evan Emenegger Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { cardContent },
  };
}

export default Projects;
