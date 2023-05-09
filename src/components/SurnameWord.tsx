import styles from './SurnameWord.module.css';

const SurnameWord: React.FC = () => {
  const changeWord = 'Wasilewski'.split('');
  return (
    <div className={styles.surname_word}>
      {changeWord.map((word, index) => (
        <span key={index} className={styles.four_word}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default SurnameWord;
