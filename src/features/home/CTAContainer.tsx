import styles from "./Content.module.scss";
import { motion, Variants } from "framer-motion";
import AnimateTextArray from "./AnimateTextArray";

const intro = ["it", "me,", "evan"];

const ulVariants: Variants = {
  visible: {
    transition: {
      delayChildren: 0.9,
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
