import React from "react";
import Head from "next/head";
import { Grid, Container, Image, Row, Text } from "@nextui-org/react";
import {images} from '../public/images'
// import Image from 'next/image';

const imageGrid = images.map((img) => {
  return (
    <Grid xs={12} md={6} xl={4} key={img.id}>
      <Image
        showSkeleton
        width='100%'
        // height={500}
        maxDelay={10000}
        src={img.src}
        alt={img.alt}
        key={img.id}
        autoResize
      />
    </Grid>
  );
});

const Photography = () => {
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
          Photography
        </Text>
      </Row>
      <Grid.Container gap={1} justify="center">
        {imageGrid}
      </Grid.Container>
    </>
  );
};

export default Photography;
