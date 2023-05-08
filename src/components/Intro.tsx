import styles from './Intro.module.css';

const Intro: React.FC = () => {
  const handleScroll = (): void => {
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles.intro_container}>
      <div className={styles.wrapper}>
        <img
          className={styles.intro_image}
          src={require('../images/pm-logo.png')}
          alt='logo'
        ></img>
        <div className={styles.intro_text}>
          <span className={styles.visible_span}>Change</span>
          <span className={styles.visible_span}>Academy</span>
          <span className={styles.unvisible_span}>Jarosław</span>
          <span className={styles.unvisible_span}>Wasilewski</span>
        </div>
      </div>
      <div className={styles.button_container}>
        <button className={styles.button} onClick={handleScroll}>
          Przejdź do sekcji O mnie
        </button>
      </div>
    </div>
  );
};
export default Intro;
