import React from 'react'
import { motion } from "framer-motion";
import styles from './Content.module.scss'
import { Text } from '@nextui-org/react';

const intro = ["Hi", "I'm", "Evan."];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const AnimationContainer = ({text}) => {
  return (
    <motion.ul
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {intro.map((word, index) => (
        <motion.li key={index} variants={item} className={styles.item}>
          {/* <Text 
            weight="bold"
            css={{
              // textGradient: "45deg, $green600 -20%, $cyan600 100%",
              fontSize: '8rem'
            }}>
            {word}
          </Text> */}
          <h1>{word}</h1>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default AnimationContainer