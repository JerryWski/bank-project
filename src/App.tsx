import Intro from './components/Intro';
import styles from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={styles.app_container}>
      <Intro />
    </div>
  );
};

export default App;
