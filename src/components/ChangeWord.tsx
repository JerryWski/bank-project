import styles from './ChangeWord.module.css';

const ChangeWord: React.FC = () => {
  const changeWord = 'Change'.split('');
  return (
    <>
      <div className={styles.change_word}>
        {changeWord.map((word, index) => (
          <span key={index} className={styles.first_word}>
            {word}
          </span>
        ))}

      </div>
    </>
  );
};

export default ChangeWord;
