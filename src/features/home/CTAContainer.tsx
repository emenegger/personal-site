import styles from "./Content.module.scss";
import { motion, Variants } from "framer-motion";
import AnimateTextArray from "./AnimateTextArray";

const intro = ["hi", "i'm", "evan"];

const ulVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.9,
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