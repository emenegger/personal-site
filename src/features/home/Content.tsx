import CTAContainer from "./CTAContainer";
import styles from "./Content.module.scss";
import Synopsis from "./Synopsis";
import Image from "next/image";
import {
  torresDelPaineNoBackground,
  torresDelPaine,
} from "../../../public/images";

const Content = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.backgroundImage}>
        <Image
          src={torresDelPaine}
          alt="Torres del Paine background"
          fill
          priority
          sizes="100vw"
          quality={90}
          className={styles.backgroundImageFill}
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
        />
      </div>
      <div className={styles.foregroundOverlay} />
      <CTAContainer />
      <Synopsis />
    </div>
  );
};

export default Content;
