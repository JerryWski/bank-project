import styles from './NameWord.module.css';

const NameWord: React.FC = () => {
  const changeWord = 'Jarosław'.split('');
  return (
    <div className={styles.name_word}>
      {changeWord.map((word, index) => (
        <span key={index} className={styles.third_word}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default NameWord;
