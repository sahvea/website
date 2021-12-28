import React, { useContext } from 'react';
import { TranslationContext } from '../../../contexts/translationContext';
import { linksArray } from '../../../utils/constants';
import StarsBg from '../../Deco/StarsBg/StarsBg';
import NextSectionLink from '../../NextSectionLink/NextSectionLink';

const AboutMe: React.FC = () => {
  const translation = useContext(TranslationContext);

  return (
    <section className="about app__section" id="about">
      <h2 className="app__section-title">{translation.lead.about.final}</h2>

      <div className="app__section-content">

        <ul className="info about__info">
          <li className="info__item">
            <p className="info__label">{translation.about.name.label}</p>
            <p className="info__value">{translation.about.name.value}</p>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.about.age.label}</p>
            <p className="info__value">{translation.about.age.value}</p>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.about.country.label}</p>
            <p className="info__value">{translation.about.country.value}</p>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.about.city.label}</p>
            <p className="info__value">{translation.about.city.value}</p>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.about.specialization.label}</p>
            <p className="info__value">{translation.about.specialization.value}</p>
          </li>
          <li className="info__item">
            <p className="info__label">{translation.about.education.label}</p>
            <ul className="info__value info__value_type_list">
              <li className="about__info-education-item">
                <p className="about__education-name">{translation.about.education.value.practikum.name}</p>
                <p className="about__edecation-duration">{translation.about.education.value.practikum.dates}</p>
                <p className="about__edecation-descr">{translation.about.education.value.practikum.descr}</p>
              </li>
              <li className="about__info-education-item">
                <p className="about__education-name">{translation.about.education.value.kant.name}</p>
                <p className="about__edecation-duration">{translation.about.education.value.kant.dates}</p>
                <p className="about__edecation-descr">{translation.about.education.value.kant.descr}</p>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="about__links-list">
          {
            linksArray.map((item, index) => (
              <li className="about__links-item app__animated-element" key={index} >
                <a href={item.link} className="app__link about__link" target="_blank" rel="noreferrer" data-hover={item.name} >{item.name}</a>
              </li>
            ))
          }
        </ul>

        <div className="about__text">
          <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <p className="about__paragraph">aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <NextSectionLink anchor={'#lead'} up={true} />
      <NextSectionLink anchor={'#skills'} />
      <StarsBg />
    </section>
  );
}

export default AboutMe;