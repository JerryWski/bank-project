import styles from './AcademyWord.module.css';

const AcademyWord: React.FC = () => {
  const academyWord = 'Academy'.split('');
  return (
    <>
      <div className={styles.academy_word}>
        {academyWord.map((word, index) => (
          <p key={index} className={styles.second_word}>
            {word}
          </p>
        ))}
      </div>
    </>
  );
};

export default AcademyWord;
