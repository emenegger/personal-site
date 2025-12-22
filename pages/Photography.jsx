import React from "react";
import { images } from "../public/images";
import ParallaxContainer from "../components/ParallaxContainer";

const Photography = ({ images }) => {
  return <ParallaxContainer images={images} />;
};

export async function getStaticProps() {
  return {
    props: { images },
  };
}

export default Photography;
