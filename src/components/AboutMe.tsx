import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <div className={styles.about_section} id='about-me'>
      <div className={styles.about_wrapper}>
        <div className={styles.about_description}>
          <h2 className={styles.header}>Drogi zespole Change Academy,</h2>
          <p className={styles.text}>
            Chciałbym podzielić się z Wami prostą stroną (aplikacją), a tym
            samym wyrazić chęć udziału w tym unikalnym projekcie bankowym. Jako
            osoba posiadająca umiejętności programistyczne, kreatywność oraz
            doświadczenie w pracy zespołowej, uważam, że moje umiejętności i
            chęć rozwoju są idealnie dopasowane do wymagań programu.
          </p>
          <p className={styles.text}>
            Choć od lat pracuję z sukcesami w bankowości osobistej, to moją
            pasją w wolnych chwilach jest programowanie. Sam nauczyłem się pisać
            w kilku językach, takich jak: HTML, CSS, JavaScript, React,
            TypeScript oraz w projektować i wdrażać strony internetowe. Sami
            chyba przyznacie Szanowni Państwo, że do tego typu czynności trzeba
            posiadać zdolności analityczne i stawiać czoła licznym wyzwaniom, co
            przekłada się na skuteczne rozwiązywanie skomplikowanych zadań 😊.
          </p>
          <p className={styles.text}>
            Jestem osobą, która lubi wyzwania (o czym świadczy na przykład
            niniejsza aplikacja), zawsze poszukuję nowych i innowacyjnych
            sposobów rozwiązywania problemów, co czyni mnie idealnym kandydatem
            do udziału w Change Academy. Poprzez udział w tych warsztatach,
            chciałbym poznać najlepsze praktyki projektowania i wdrażania
            projektów, aby móc wykorzystać te umięjętności w przyszłości oraz
            pracować bardziej efektywnie.
          </p>
          <p className={styles.text}>
            Jako osoba pracująca w zespole, wielokrotnie udowodniłem swoje
            umiejętności pracy zespołowej. Zawsze jestem gotowy do pomocy innym,
            dzielenia się swoją wiedzą i doświadczeniem, a także słuchania
            innych i uczenia się od nich.
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
