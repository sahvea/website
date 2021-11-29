import React from 'react';
import { TranslationContext } from '../../../contexts/translationContext';
import NextSectionLink from '../../NextSectionLink/NextSectionLink';
import StatsSlider from './StatsSlider/StatsSlider';

function Skills() {
  const translation = React.useContext(TranslationContext);


  return (
    <section className="skills app__section" id="skills">
      <h2 className="app__section-title">{translation.lead.skills.final}</h2>

      <div className="app__section-content">

        <ul className="info">
          <li className="info__item">
            <p className="info__label">{translation.skills.core}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                <li className="skills__item">
                  <p className="skills__name">JavaScript</p>
                </li>
                <li className="skills__item">
                  <p className="skills__name">Node.js</p>
                </li>
                <li className="skills__item">
                  <p className="skills__name">HTML</p>
                </li>
                <li className="skills__item">
                  <p className="skills__name">CSS</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.skills.frameworks}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                <li className="skills__item">
                  <p className="skills__name">React</p>
                </li>
                <li className="skills__item">
                  <p className="skills__name">React Native</p>
                </li>
                <li className="skills__item">
                  <p className="skills__name">Express.js</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.skills.preprocessors}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                <li className="skills__item">
                  <p className="skills__name">SASS/SCSS</p>
                </li>
                <li className="skills__item">
                  <p className="skills__name">Pug</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.skills.bundlers}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                <li className="skills__item">
                  <p className="skills__name">Webpack</p>
                </li>
                <li className="skills__item">
                  <p className="skills__name">Gulp</p>
                </li>
              </ul>
            </div>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.skills.databases}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                <li className="skills__item">
                  <p className="skills__name">MongoDB</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>


        <StatsSlider className={'skills__statistics'} />
      </div>

      <NextSectionLink anchor={'#about'} up={true} />
    </section>
  );
}

export default Skills;