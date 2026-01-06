import { Variants } from "framer-motion";
import AnimateTextArray from "./AnimateTextArray";
import styles from "./Synopsis.module.scss";

const synopsis2 = [
  "software engineer",
  "educator",
  "photographer",
  "basketball fanatic",
];

const ulVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 2,
      delayChildren: 2.3,
      staggerChildren: 0.5,
    },
  },
};

const liVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Synopsis = () => {
  return (
    <div className={styles.synopsisContainer}>
      <AnimateTextArray
        text={synopsis2}
        liVariants={liVariants}
        ulVariants={ulVariants}
        styles={styles}
      />
    </div>
  );
};

export default Synopsis;
