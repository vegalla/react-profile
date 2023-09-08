import styles from './App.module.css';

import Intro from './Components/Intro';
import Badges from './Components/Badges';
import Education from './Components/Education';
import JobTimeline from './Components/JobTimeline';
import Projects from './Components/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Intro />
      <Badges />
      <Education />
      <JobTimeline />
      <Projects />
    </div>
  );
}

export default App;
