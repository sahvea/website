import StarsBg from '../../Deco/StarsBg/StarsBg';
import NextSectionLink from '../../NextSectionLink/NextSectionLink';

function AboutMe() {
  return (
    <section className="about app__section" id="about">
      <h2 className="app__section-title">/About me</h2>

      <div className="app__section-content">
        <ul className="about__info">
          <li className="about__info-item">
            <p className="about__info-label">Name:</p>
            <p className="about__info-value">Sophie Milash</p>
          </li>
          <li className="about__info-item">
            <p className="about__info-label">Age:</p>
            <p className="about__info-value">24</p>
          </li>
          <li className="about__info-item">
            <p className="about__info-label">Country:</p>
            <p className="about__info-value">Russia</p>
          </li>
          <li className="about__info-item">
            <p className="about__info-label">City:</p>
            <p className="about__info-value">Kaliningrad</p>
          </li>
          <li className="about__info-item">
            <p className="about__info-label">Specialization:</p>
            <p className="about__info-value">Frontend developer</p>
          </li>
          <li className="about__info-item">
            <p className="about__info-label">Education:</p>
            <ul className="about__info-value about__info-value_type_list">
              <li className="about__info-education-item">
                <p className="about__education-name">Yandex.Practikum</p>
                <p className="about__edecation-duration">Jan 2021 - Oct 2021</p>
                <p className="about__edecation-descr">Web Development professional training course</p>
              </li>
              <li className="about__info-education-item">
                <p className="about__education-name">Immanuel Kant Baltic Federal University</p>
                <p className="about__edecation-duration">Sep 2015 - Jun 2019</p>
                <p className="about__edecation-descr">Linguistics and Intercultural Communication, bachelor</p>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="about__links-list">
          <li className="about__links-item app__animated-element">
            <a href="https://github.com/sahvea" className="app__link about__link" target="_blank" rel="noreferrer" data-hover="/GitHub">/GitHub</a>
          </li>
          <li className="about__links-item app__animated-element">
            <a href="https://t.me/sahvea" className="app__link about__link" target="_blank" rel="noreferrer" data-hover="/Telegram">/Telegram</a>
          </li>
          <li className="about__links-item app__animated-element">
            <a href="https://www.codewars.com/users/sahvea" className="app__link about__link" target="_blank" rel="noreferrer" data-hover="/Codewars">/Codewars</a>
          </li>
        </ul>

        <div className="about__text">
          <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
          <p className="about__paragraph">aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      <NextSectionLink anchor={'#skills'} />
      <StarsBg />
    </section>
  );
}

export default AboutMe;