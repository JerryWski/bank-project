import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.about_section} id='about-me'>
      <div className={styles.about_wrapper}>
        <div className={styles.about_description}>
          <h2 className={styles.header}>Drogi zespole Change AcadeMy,</h2>
          <p className={styles.text}>
            Chciałbym podzielić się z Wami moim zainteresowaniem udziałem w tym
            unikalnym programie szkoleniowym. Jako osoba posiadająca
            umiejętności programistyczne, kreatywność oraz doświadczenie w pracy
            zespołowej, uważam, że moje umiejętności i chęć rozwoju są idealnie
            dopasowane do wymagań programu.
          </p>
          <p className={styles.text}>
            Mam doświadczenie w programowaniu w wielu językach, takich jak
            Python, Java i C++, oraz w projektowaniu i wdrażaniu aplikacji
            internetowych. Oprócz tego, posiadam silne zdolności analityczne i
            podejście oparte na problemach, które pozwoliły mi na skuteczne
            rozwiązywanie skomplikowanych problemów.
          </p>
          <p className={styles.text}>
            Jestem bardzo kreatywną osobą, która lubi wyzwania. Zawsze poszukuję
            nowych i innowacyjnych sposobów rozwiązywania problemów, co czyni
            mnie idealnym kandydatem do udziału w Change AcadeMy. Chciałbym
            poznać najlepsze praktyki projektowania i wdrażania projektów, aby
            móc lepiej współpracować z zespołem i osiągać cele projektowe w
            sposób bardziej efektywny.
          </p>
          <p className={styles.text}>
            Jako osoba pracująca w zespole wielokrotnie udowodniłem swoje
            umiejętności pracy zespołowej. Zawsze jestem gotowy do pomocy innym,
            dzielenia się swoją wiedzą i doświadczeniem, a także słuchania
            innych i uczenia się od nich. Uważam, że umiejętności
            interpersonalne są kluczem do sukcesu w każdym projekcie, a moje
            doświadczenie w pracy zespołowej potwierdza moje podejście.
          </p>
          <p className={styles.text}>
            Jestem przekonany, że udział w Change AcadeMy pozwoliłby mi na
            rozwój moich umiejętności i wiedzy, a także na nawiązanie nowych
            relacji i połączenie z innymi utalentowanymi pracownikami. Będę
            wdzięczny za rozważenie mojej kandydatury na udział w tym projekcie.
          </p>
        </div>
        <div className={styles.about_card}>
          <img
            src={require('../images/jerry-hero2.png')}
            className={styles.about_photo}
          ></img>
          <p className={styles.about_alias}> Jarosław Wasilewski </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
