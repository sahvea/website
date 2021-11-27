import NextSectionLink from '../../NextSectionLink/NextSectionLink';
import StatsSlider from './StatsSlider/StatsSlider';

function Skills() {
  return (
    <section className="skills app__section" id="skills">
      <h2 className="app__section-title">/Skill set</h2>

      <div className="app__section-content">


        <StatsSlider className={'skills__statistics'} />
      </div>

      <NextSectionLink anchor={'#about'} up={true} />
    </section>
  );
}

export default Skills;