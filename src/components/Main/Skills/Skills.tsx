import React from 'react';
import { TranslationContext } from '../../../contexts/translationContext';
import { skillsArray } from '../../../utils/constants';
import NextSectionLink from '../../NextSectionLink/NextSectionLink';
import StatsSlider from './StatsSlider/StatsSlider';

const Skills: React.FC = () => {
  const translation = React.useContext(TranslationContext);


  return (
    <section className="skills app__section" id="skills">
      <h2 className="app__section-title">{translation.lead.skills.final}</h2>

      <div className="app__section-content">

        <ul className="info">
          <li className="info__item skills__info-item">
            <p className="info__label">{translation.skills.core}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                {
                  skillsArray[0].map((item, index) => (
                    <li className="skills__item" key={index}>
                      <p className="skills__name">{item.name}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
          <li className="info__item skills__info-item">
            <p className="info__label">{translation.skills.frameworks}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                {
                  skillsArray[1].map((item, index) => (
                    <li className="skills__item" key={index}>
                      <p className="skills__name">{item.name}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
          <li className="info__item skills__info-item">
            <p className="info__label">{translation.skills.preprocessors}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                {
                  skillsArray[2].map((item, index) => (
                    <li className="skills__item" key={index}>
                      <p className="skills__name">{item.name}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
          <li className="info__item skills__info-item">
            <p className="info__label">{translation.skills.bundlers}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                {
                  skillsArray[3].map((item, index) => (
                    <li className="skills__item" key={index}>
                      <p className="skills__name">{item.name}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
          <li className="info__item skills__info-item">
            <p className="info__label">{translation.skills.databases}</p>
            <div className="info__value info__value_type_list">
              <ul className="skills__list">
                {
                  skillsArray[4].map((item, index) => (
                    <li className="skills__item" key={index}>
                      <p className="skills__name">{item.name}</p>
                    </li>
                  ))
                }
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