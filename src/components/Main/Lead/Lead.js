import AnchorLink from 'react-anchor-link-smooth-scroll';
import NextSectionLink from '../../NextSectionLink/NextSectionLink';

function Lead() {
  return (
    <section className="lead app__section">
      <h1 className="lead__title">Frontend development</h1>
      <ul className="lead__list">
        <li className="lead__list-item">
          <AnchorLink href="#about" className="app__link lead__link">/About me</AnchorLink>
        </li>
        <li className="lead__list-item">
          <AnchorLink href="#skills" className="app__link lead__link">/Skill set</AnchorLink>
        </li>
      </ul>

      <NextSectionLink anchor={'#about'} />
    </section>
  );
}

export default Lead;