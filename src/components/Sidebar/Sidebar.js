import React from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import { NavLink } from 'react-router-dom';

function Sidebar(props) {
  const translation = React.useContext(TranslationContext);
  const [isLinkHover, setIsLinkHover] = React.useState(false);

  const sidebarClassName = `sidebar ${isLinkHover ? 'sidebar_active' : ''}`;
  const navLinkClassName = ({ isActive }) =>
    `app__link sidebar__nav-link ${isLinkHover ? 'sidebar__nav-link_hovered' : ''}`
    + (isActive ? ' sidebar__nav-link_active' : '');

  function handleMouseOver() {
    setIsLinkHover(true);
  }

  function handleMouseOut() {
    setIsLinkHover(false);
  }

  function handleLinkClick() {
    setIsLinkHover(false);
  }

  function handleLangChange(e) {
    const innerText = e.target.innerText.toLowerCase();
    let lang;

    innerText === 'рус'
      ? lang = 'ru'
      : lang = 'en';

    props.onLangClick(lang);
  }


  return (
    <aside className={sidebarClassName}>
      <nav className="sidebar__navigation">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item">
            <NavLink to="/"
              className={navLinkClassName}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              onClick={handleLinkClick}
              data-hover={translation.nav.main}
            >
              {translation.nav.main}
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/projects"
              className={navLinkClassName}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              onClick={handleLinkClick}
              data-hover={translation.nav.projects}
            >
              {translation.nav.projects}
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/contact"
              className={navLinkClassName}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              onClick={handleLinkClick}
              data-hover={translation.nav.contact}
            >
              {translation.nav.contact}
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="app__button sidebar__lang-button app__animated-element" type="button">
        <span
          className="sidebar__lang-text"
          data-hover={translation.nav.lang}
          onClick={handleLangChange}
        >
          {translation.nav.lang}
        </span>
      </button>
    </aside>
  );
}

export default Sidebar;