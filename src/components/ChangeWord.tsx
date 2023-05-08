import styles from './ChangeWord.module.css';

const ChangeWord: React.FC = () => {
  const changeWord = 'Change'.split('');
  return (
    <>
      <div className={styles.change_word}>
        {changeWord.map((word, index) => (
          <p key={index} className={styles.first_word}>
            {word}
          </p>
        ))}
      </div>
    </>
  );
};

export default ChangeWord;
