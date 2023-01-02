import React from "react";
import Head from "next/head";
import { Grid, Container, Image, Row, Text } from "@nextui-org/react";
// import Image from 'next/image';

const images = [
  {
    src: "https://imagizer.imageshack.com/img923/91/yp8mkk.jpg",
    alt: "mountain in tdp",
    id: 1
  },
  {
    src: "https://imagizer.imageshack.com/img924/8949/jVYEhN.jpg",
    alt: "mountain and tree in tdp",
    id: 2
  },
  {
    src: "https://imagizer.imageshack.com/img922/4851/ycuBnW.jpg",
    alt: "cloudy mountain in tdp",
    id: 3
  },
  {
    src: "https://imagizer.imageshack.com/img922/9748/mny1WW.jpg",
    alt: "actual tdp",
    id: 4
  },
  {
    src: "https://imagizer.imageshack.com/img923/1533/n23Tc5.jpg",
    alt: "blue water tdp",
    id: 5
  },
  {
    src: "https://imagizer.imageshack.com/img923/2386/WnqJrK.jpg",
    alt: "valapariso",
    id: 6
  },
  {
    src: "https://imagizer.imageshack.com/img922/7338/3KWc63.jpg",
    alt: "santiago at night",
    id: 7
  },
  {
    src: "https://imagizer.imageshack.com/img923/5341/NcxQTN.jpg",
    alt: "santiago at sunset",
    id: 8
  },
  {
    src: "https://imagizer.imageshack.com/img922/7506/jPBNxk.jpg",
    alt: "light store in cdmx",
    id: 9
  },
  {
    src: "https://imagizer.imageshack.com/img924/1734/ceUtJz.jpg",
    alt: "china town cdmx",
    id: 10
  },
  {
    src: "https://imagizer.imageshack.com/img924/2214/0Ek8Hi.jpg",
    alt: "plant on church",
    id: 11
  },
  {
    src: "https://imagizer.imageshack.com/img923/2361/z2As0n.jpg",
    alt: "library",
    id: 12
  }
];

const imageGrid = images.map((img) => {
  return (
    <Grid xs={12} md={6} xl={4} key={img.id}>
      <Image
        showSkeleton
        width='100%'
        height={500}
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
