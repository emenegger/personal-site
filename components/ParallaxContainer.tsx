// Photos from https://citizenofnowhe.re/lines-of-the-city
import styles from "./ParallaxContainer.module.scss";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

function Image({ image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.card}>
        <img src={image?.src} alt={image.alt} className={styles.image} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. </p>
      </div>
      {/* <motion.h2
        className={styles.label}
        style={{ y }}
      >{`${image.alt}`}</motion.h2> */}
      <motion.div ref={ref} className={styles.label} style={{ y }}>
        <img src={image?.src} alt={image.alt} className={styles.image} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. </p>
      </motion.div>
    </section>
  );
}

const ParallaxContainer = ({ images }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={styles.container}>
      {images.map((image) => (
        <Image image={image} key={image.id}/>
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
    </div>
  );
};

export default ParallaxContainer;
