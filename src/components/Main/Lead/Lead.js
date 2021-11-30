import React from 'react';
import { TranslationContext } from '../../../contexts/translationContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NextSectionLink from '../../NextSectionLink/NextSectionLink';
import { setCounterAnimation } from '../../../utils/counterAnimation';
import Flying from '../../Deco/Flying/Flying';


function Lead() {
  const translation = React.useContext(TranslationContext);
  const title = 'Frontend development';

  React.useEffect(() => {
    const arr = [`${title}`];
    const element = document.querySelector('.lead__title');

    setCounterAnimation(arr, element, 20000);
  },[]);

  return (
    <section className="lead app__section" id="lead">
      <h1 className="lead__title">{title}</h1>
      <ul className="lead__list">
        <li className="lead__list-item">
          <AnchorLink href="#about" className="app__link app__section-title lead__link">
            <span className="lead__link-option">{translation.lead.about.option1}</span>
            <span className="lead__link-option">{translation.lead.about.option2}</span>
            <span className="lead__link-option">{translation.lead.about.option3}</span>
            <span className="lead__link-option">{translation.lead.about.option4}</span>
            <span className="lead__link-option">{translation.lead.about.option5}</span>
            <span className="lead__link-option">{translation.lead.about.option6}</span>
            <span className="lead__link-final" >{translation.lead.about.final}</span>
          </AnchorLink>
        </li>
        <li className="lead__list-item">
          <AnchorLink href="#skills" className="app__link app__section-title lead__link">
            <span className="lead__link-option">{translation.lead.skills.option1}</span>
            <span className="lead__link-option">{translation.lead.skills.option2}</span>
            <span className="lead__link-option">{translation.lead.skills.option3}</span>
            <span className="lead__link-option">{translation.lead.skills.option4}</span>
            <span className="lead__link-option">{translation.lead.skills.option5}</span>
            <span className="lead__link-option">{translation.lead.skills.option6}</span>
            <span className="lead__link-final" >{translation.lead.skills.final}</span>
          </AnchorLink>
        </li>
      </ul>

      <NextSectionLink anchor={'#about'} />
      <Flying />
    </section>
  );
}

export default Lead;