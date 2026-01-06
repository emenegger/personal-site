import CTAContainer from "./CTAContainer";
import styles from "./Content.module.scss";
import Synopsis from "./Synopsis";

const Content = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.backgroundImage} />
      <div className={styles.backgroundOverlay} />
      <div className={styles.foregroundImage} />
      <div className={styles.foregroundOverlay} />
      <CTAContainer />
      <Synopsis />
    </div>
  );
};

export default Content;