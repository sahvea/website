import Lead from './Lead/Lead';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import UpLink from '../UpLink/UpLink';

function Main() {
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