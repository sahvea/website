import React from 'react';
import Lead from './Lead/Lead';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import UpLink from '../UpLink/UpLink';

const Main: React.FC = () => {
  return (
    <>
      <Lead />
      <AboutMe />
      <Skills />
      <UpLink anchor={'#lead'}/>
    </>
  );
}

export default Main;