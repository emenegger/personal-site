import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./Content.module.scss";

type AnimationContainerProps = {
  text: Array<string>;
  ulVariants: Variants;
  liVariants: Variants;  
}

const AnimationContainer = ({
  text,
  ulVariants,
  liVariants,
}: AnimationContainerProps) => {
  return (
    <motion.ul
      className={styles.ctaTextContainer}
      variants={ulVariants}
      initial="hidden"
      animate="visible"
    >
      {text.map((word, index) => (
        <motion.li key={index} variants={liVariants} className={styles.ctaText}>
          <h1>{word}</h1>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimationContainer;
