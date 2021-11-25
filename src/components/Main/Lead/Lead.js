import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NextSectionLink from '../../NextSectionLink/NextSectionLink';
import { setCounterAnimation } from '../../../utils/counterAnimation';


function Lead() {
  const title = 'Frontend development';

  React.useEffect(() => {
    const arr = [`${title}`];
    const element = document.querySelector('.lead__title');

    setCounterAnimation(arr, element, 20000);
  },[]);

  return (
    <section className="lead app__section">
      <h1 className="lead__title">{title}</h1>
      <ul className="lead__list">
        <li className="lead__list-item">
          <AnchorLink href="#about" className="app__link app__section-title lead__link">
            <span className="lead__link-option">a#425t @m</span>
            <span className="lead__link-option">A1$8b! j&</span>
            <span className="lead__link-option">\A@64t $$</span>
            <span className="lead__link-option">/A5d0? t#</span>
            <span className="lead__link-option">Ab0$it 9e</span>
            <span className="lead__link-option">/Abou! ne</span>
            <span className="lead__link-final" >/About me</span>
          </AnchorLink>
        </li>
        <li className="lead__list-item">
          <AnchorLink href="#skills" className="app__link app__section-title lead__link">
            <span className="lead__link-option">s&9Lir $rt</span>
            <span className="lead__link-option">8ki\ep 5#2</span>
            <span className="lead__link-option">$p8b!; $$t</span>
            <span className="lead__link-option">/Sm9d? j#y</span>
            <span className="lead__link-option">Sk0il5 9el</span>
            <span className="lead__link-option">/Ski!! $e?</span>
            <span className="lead__link-final" >/Skill set</span>
          </AnchorLink>
        </li>
      </ul>

      <NextSectionLink anchor={'#about'} />
    </section>
  );
}

export default Lead;