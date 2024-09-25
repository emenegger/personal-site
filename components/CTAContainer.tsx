import { Text } from "@nextui-org/react";
import styles from "./Content.module.scss";
import { motion, Variants } from "framer-motion";
import AnimationContainer from "./AnimationContainer";

const intro = ["Hi", "I'm", "Evan."];

const ulVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const liVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const synopsis =
  "I'm a Software Engineer experienced in TypeScript and React passionate about front-end development, mentorship, problem-solving, and photography.";

const CTAContainer = () => {
  return (
    <>
      <motion.div className={styles.ctaContainer}>
        <AnimationContainer
          text={intro}
          liVariants={liVariants}
          ulVariants={ulVariants}
        />
      </motion.div>
    </>
  );
};

export default CTAContainer;

/* <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, scale: [1, 1.1, 1] }}
  transition={{ delay: 1.85, duration: 1 }}
>
  <Text h3 weight="thin">
    {synopsis}
  </Text>
  </motion.div> */
