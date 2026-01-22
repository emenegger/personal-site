import { useCallback, useState } from "react";

import CTAContainer from "./CTAContainer";
import LoadingState from "./LoadingState";
import Synopsis from "./Synopsis";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import {
  torresDelPaineNoBackground,
  torresDelPaine,
} from "../../../public/images";

import styles from "./Content.module.scss";

const Content = () => {
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(true);
  const [isForegroundLoading, setIsForegroundLoading] = useState(true);

  const handleBackgroundImageLoad = useCallback(() => {
    setIsBackgroundLoading(false);
  }, []);

  const handleForegroundImageLoad = useCallback(() => {
    setIsForegroundLoading(false);
  }, []);

  const isLoading = isBackgroundLoading || isForegroundLoading;

  return (
    <div className={styles.homePageContainer}>
      {/* @ts-ignore */}
      <AnimatePresence mode='wait'>
        {isLoading && <LoadingState key="loading" />}
      </AnimatePresence>
      <div className={styles.backgroundImage}>
        <Image
          src={torresDelPaine}
          alt="Torres del Paine background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className={styles.backgroundImageFill}
          onLoad={handleBackgroundImageLoad}
        />
      </div>
      <div className={styles.backgroundOverlay} />
      <div className={styles.foregroundImage}>
        <Image
          src={torresDelPaineNoBackground}
          alt="Torres del Paine foreground"
          fill
          priority
          sizes="100vw"
          quality={90}
          className={styles.foregroundImageFill}
          onLoad={handleForegroundImageLoad}
        />
      </div>
      <div className={styles.foregroundOverlay} />
      <CTAContainer />
      <Synopsis />
    </div>
  );
};

export default Content;
