import NextSectionLink from '../../NextSectionLink/NextSectionLink';
import StatsSlider from './StatsSlider/StatsSlider';

function Skills() {
  return (
    <section className="skills app__section" id="skills">
      <h2 className="app__section-title">/Skill set</h2>

      <div className="app__section-content">

        <ol className="skills__list">
          <li className="skills__list-item" data-number="0">
            <h3 className="skills__group-title">Core technologies</h3>
            <ul className="skills__group">
              <li className="skills__group-item">
                <p className="skills__skill">JavaScript</p>
              </li>
              <li className="skills__group-item">
                <p className="skills__skill">NODE.JS</p>
              </li>
              <li className="skills__group-item">
                <p className="skills__skill">HTML</p>
              </li>
              <li className="skills__group-item">
                <p className="skills__skill">CSS</p>
              </li>
            </ul>
          </li>

          <li className="skills__list-item" data-number="1">
            <h3 className="skills__group-title">Frameworks / libraries</h3>
            <ul className="skills__group">
              <li className="skills__group-item">
                <p className="skills__skill">React</p>
              </li>
              <li className="skills__group-item">
                <p className="skills__skill">React NAtive</p>
              </li>
              <li className="skills__group-item">
                <p className="skills__skill">Express.js</p>
              </li>
            </ul>
          </li>

          <li className="skills__list-item" data-number="2">
            <h3 className="skills__group-title">Preprocessors</h3>
            <ul className="skills__group">
              <li className="skills__group-item">
                <p className="skills__skill">SASS/SCSS</p>
              </li>
              <li className="skills__group-item">
                <p className="skills__skill">Pug</p>
              </li>
            </ul>
          </li>

          <li className="skills__list-item" data-number="3">
            <h3 className="skills__group-title">Module bundlers</h3>
            <ul className="skills__group">
              <li className="skills__group-item">
                <p className="skills__skill">Webpack</p>
              </li>
              <li className="skills__group-item">
                <p className="skills__skill">Gulp</p>
              </li>
            </ul>
          </li>

          <li className="skills__list-item" data-number="4">
            <h3 className="skills__group-title">Databases</h3>
            <ul className="skills__group">
              <li className="skills__group-item">
                <p className="skills__skill">MongoDB</p>
              </li>
            </ul>
          </li>
        </ol>


        <StatsSlider className={'skills__statistics'} />
      </div>

      <NextSectionLink anchor={'#about'} up={true} />
    </section>
  );
}

export default Skills;