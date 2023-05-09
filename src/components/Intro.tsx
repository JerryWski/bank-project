import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Intro.module.css';
import ChangeWord from './ChangeWord';
import AcademyWord from './AcademyWord';

const Intro: React.FC = () => {
  const handleScroll = (): void => {
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection?.scrollIntoView({ behavior: 'smooth' });
  };
  // const changeWord = 'Change'.split('');

  return (
    <div className={styles.intro_container}>
      <div className={styles.wrapper}>
        <img
          className={styles.intro_image}
          src={require('../images/pm-logo.png')}
          alt='logo'
        ></img>
        <div className={styles.intro_text}>
          <ChangeWord />
          <AcademyWord />
          <div className={styles.name_word}>
            <p className={styles.third_word}>Jarosław</p>
          </div>
          <div className={styles.surname_word}>
            <p className={styles.four_word}>Wasilewski</p>
          </div>
        </div>
      </div>
      <div className={styles.button_container}>
        <button className={styles.button} onClick={handleScroll}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
};
export default Intro;
