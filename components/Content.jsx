import React from "react";
import { Image } from "@nextui-org/react";
import styles from "./Content.module.scss";
import CTAContainer from './CTAContainer'

const synopsis =
  "I'm a Software Engineer experienced in TypeScript and React passionate about front-end development, mentorship, problem-solving, and photography.";
const title = "Software Engineer & Photographer";

const image = "https://drive.google.com/uc?export=view&id=anzbXr56ZSFkpaM58";

const Content = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.backgroundImage}>
        <Image src="/images/DSC_9716.jpg" alt="tdp" />
      </div>
      <div className={styles.backgroundOverlay} />
      <div className={styles.foregroundImage}>
        <Image src="/images/tdp_no_background.png" alt="tdp" />
      </div>
        <CTAContainer />
    </div>
  );
};

export default Content;

/*
    <>
      <Container
        display="flex"
        direction="column"
        xl
        justify="center"
        fluid="true"
        alignItems="center"
        css={{
          backgroundColor: "#F1F3F5",
          height: "94vh",
          minWidth: "100vw",
        }}
      >
        <Container css={{ maxWidth: "60vh", textAlign: "center", padding: 10 }}>
          <Text
            h1
            weight="light"
            css={{
              textGradient: "45deg, $green600 -20%, $cyan600 100%",
            }}
          >
            {title}
          </Text>
          <Text h3 weight="thin">
            {synopsis}
          </Text>
        </Container>
      </Container>
    </>
*/
