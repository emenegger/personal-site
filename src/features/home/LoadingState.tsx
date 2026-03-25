import { motion } from "framer-motion";
import {
  LOADING_STATE_ANIMATION_DELAY,
  LOADING_STATE_DURATION,
} from "./constants";
import Image from "next/image";
import styles from "./Content.module.scss";
import { ralphWiggum } from "@/../public/images";

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
    >
      <div className={styles.loadingContent}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: 1,
          ease: "linear",
          delay: 0.3,
        }}
      >
        <Image
          src={ralphWiggum}
          sizes="5rem"
          quality={10}
          alt="ralph"
          width={80}
          height={80}
        />
      </motion.div>
      <div className={styles.dotsContainer}>
        <span>im loading</span>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          >
            .
          </motion.span>
        ))}
      </div>
      </div>
    </motion.div>
  );
};

export default LoadingState;
