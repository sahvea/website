import React, { Dispatch, MouseEvent } from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import { NavLink } from 'react-router-dom';

interface Props {
  onLangClick: Dispatch<string>;
}

const Sidebar: React.FC<Props> = ({ onLangClick }) =>{
  const translation = React.useContext(TranslationContext);
  const [isLinkHover, setIsLinkHover] = React.useState<boolean>(false);

  const sidebarClassName: string = `sidebar ${isLinkHover ? 'sidebar_active' : ''}`;
  const navLinkClassName: string = `app__link sidebar__nav-link ${isLinkHover ? 'sidebar__nav-link_hovered' : ''}`;
  const activeLinkClassName: string = ' sidebar__nav-link_active';

  function handleMouseOver() {
    setIsLinkHover(true);
  }

  function handleMouseOut() {
    setIsLinkHover(false);
  }

  function handleLinkClick() {
    setIsLinkHover(false);
  }

  function handleLangChange(e: MouseEvent<HTMLElement>) {
    const innerText: string = (e.target as HTMLElement).innerText.toLowerCase();
    let lang: string;

    innerText === 'рус'
      ? lang = 'ru'
      : lang = 'en';

    onLangClick(lang);
  }


  return (
    <aside className={sidebarClassName}>
      <nav className="sidebar__navigation">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item">
            <NavLink to="/"
              className={isActive => navLinkClassName + (isActive ? activeLinkClassName : '')}
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
              className={isActive => navLinkClassName + (isActive ? activeLinkClassName : '')}
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
              className={isActive => navLinkClassName + (isActive ? activeLinkClassName : '')}
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