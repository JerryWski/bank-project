import styles from './Intro.module.css';

const Intro: React.FC = () => {
  return (
    <div className={styles.intro_container}>
      <div className={styles.wrapper}>
        <img className={styles.intro_image} src={require('../images/pm-logo.png')} alt='logo'></img>
        <div className={styles.intro_text}>
            <span className={styles.visible_span}>Change</span>
            <span className={styles.visible_span}>Academy</span>
            <span className={styles.unvisible_span}>Jarosław</span>
            <span className={styles.unvisible_span}>Wasilewski</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
