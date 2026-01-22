import styles from "./Content.module.scss";
import { motion, Variants } from "framer-motion";
import AnimateTextArray from "./AnimateTextArray";
import { START_INTRO_ANIMATION_TIMING } from "./constants";

const intro = ["hi", "i'm", "evan"];

const ulVariants: Variants = {
  visible: {
    transition: {
      delayChildren: START_INTRO_ANIMATION_TIMING,
      staggerChildren: 0.5,
    },
  },
};

const liVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1},
};

const CTAContainer = () => (
  <motion.div className={styles.ctaContainer}>
    <AnimateTextArray
      text={intro}
      liVariants={liVariants}
      ulVariants={ulVariants}
      styles={styles}
    />
  </motion.div>
);

export default CTAContainer;
