import React from "react";
import { motion, Variants } from "framer-motion";

type AnimationContainerProps = {
  text: Array<string>;
  ulVariants: Variants;
  liVariants: Variants;
  styles: any;  
}

const AnimateTextArray = ({
  text,
  ulVariants,
  liVariants,
  styles,
}: AnimationContainerProps) => {
  return (
    <motion.ul
      className={styles.animateTextArrayContainer}
      variants={ulVariants}
      initial="hidden"
      animate="visible"
    >
      {text.map((word, index) => (
        <motion.li key={index} variants={liVariants} className={styles.animateTextArrayText}>
          <h1>{word}</h1>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimateTextArray;
