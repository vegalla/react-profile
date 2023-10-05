import styles from './App.module.css';

import Navigation from './Components/Navigation';

import Intro from './Components/Intro';
import Badges from './Components/Badges';
import Education from './Components/Education';
import JobTimeline from './Components/JobTimeline';
import Projects from './Components/Projects';

import ThreeCanvas from './Components/ThreeCanvas';

import { Container } from '@chakra-ui/react';
// import Statue from './Components/Statue';
// import NoSsr from './Functions/NoSsr';

// import { useState, lazy, Suspense } from 'react';
// import { Spinner } from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react';

// const StatuePreview = lazy(() => import('./Components/Statue'));

function App() {

  return (
    // <ChakraProvider>
    <div className={styles.App}>
      {/* <Suspense fallback={<Spinner />}> */}
      {/* <StatuePreview /> */}
      {/* </Suspense> */}
      {/* <div id="background"> */}
      {/* <ThreeCanvas /> */}
      {/* </div> */}
      <div id="navigation">
        <Navigation />
      </div>
      <div id="content">
        <Intro />
        <Badges />
        <Education />
        <JobTimeline />
        <Projects />
      </div>
    </div>
    // </ChakraProvider>
  );
}

export default App;
