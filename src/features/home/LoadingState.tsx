import { motion } from "framer-motion";
import {
  LOADING_STATE_ANIMATION_DELAY,
  LOADING_STATE_DURATION,
} from "./constants";
import styles from "./Content.module.scss";



const LoadingState = () => {
  return (
    <motion.div
      className={styles.isLoading}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: LOADING_STATE_DURATION,
        delay: LOADING_STATE_ANIMATION_DELAY,
      }}
    ></motion.div>
  );
};

export default LoadingState;
