import { Grid, Row, Text, Image } from "@nextui-org/react";
import Head from 'next/head'
import React from 'react'
import {cardContent} from '../public/cardContent'
import ProjectSquare from '../components/ProjectSquare';

const Projects = (props) => {
  const {cardContent} = props
  console.log(cardContent);
  
  const projects = cardContent.map((ele) => {
    return (
      <Grid xs={12} md={6} xl={4} key={ele.id}>
        <ProjectSquare data={ele} />
      </Grid>
    );
  });

  return (
    <>
      <Head>
        <title>Evan Emenegger - Photos</title>
        <meta name="description" content="Evan Emenegger Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row justify="center">
        <Text h1 weight="bold">
          Web Projects
        </Text>
      </Row>
      <Grid.Container gap={1} justify="center">
        {projects}
      </Grid.Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {cardContent},
  }
}

export default Projects