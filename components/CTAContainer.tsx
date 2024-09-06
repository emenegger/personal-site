import { Text } from "@nextui-org/react";
import styles from "./Content.module.scss";
import { motion } from "framer-motion";
import AnimationContainer from "./AnimationContainer";

const intro = ["Hi", "I'm", "Evan."];

const synopsis =
  "I'm a Software Engineer experienced in TypeScript and React passionate about front-end development, mentorship, problem-solving, and photography.";

const CTAContainer = () => {
  return (
    <>
      <motion.div className={styles.ctaContainer}>
        <AnimationContainer text={intro} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ delay: 1.85, duration: 1 }}
      >
        {/* <Text h3 weight="thin">
          {synopsis}
        </Text> */}
      </motion.div>
    </>
  );
};

export default CTAContainer;
