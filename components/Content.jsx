import React from "react";
import { Image } from "@nextui-org/react";
import styles from "./Content.module.scss";
import CTAContainer from "./CTAContainer";

const synopsis =
  "I'm a Software Engineer experienced in TypeScript and React passionate about front-end development, mentorship, problem-solving, and photography.";
const title = "Software Engineer & Photographer";

const image = "https://drive.google.com/uc?export=view&id=anzbXr56ZSFkpaM58";

const Content = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.backgroundImage} />
      <div className={styles.backgroundOverlay} />
      <div className={styles.foregroundImage} />
      <CTAContainer />
    </div>
  );
};

export default Content;