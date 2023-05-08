import Intro from './components/Intro';
import styles from './App.module.css';
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  return (
    <div className={styles.app_container}>
      <Intro />
      <AboutMe />
    </div>
  );
};

export default App;
