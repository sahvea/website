import React, { Dispatch } from 'react';
import { NavLink } from 'react-router-dom';
import { TranslationContext } from '../../contexts/translationContext';

interface Props {
  className?: string;
  isLinkHover: boolean;
  onLinkHover: Dispatch<boolean>;
}

const Navigation: React.FC<Props> = ({ className, isLinkHover, onLinkHover }) => {
  const translation = React.useContext(TranslationContext);

  const navigationClassName: string = `navigation ${className ? className : ''}`;
  const navLinkClassName: string = `app__link navigation__link ${isLinkHover ? 'navigation__link_hovered' : ''}`;
  const activeLinkClassName: string = ' navigation__link_active';

  function handleMouseOver() {
    onLinkHover(true);
  }

  function handleMouseOut() {
    onLinkHover(false);
  }

  function handleLinkClick() {
    onLinkHover(false);
  }

  return (
    <nav className={navigationClassName}>
      <ul className="navigation__list">
        <li className="navigation__list-item">
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
        <li className="navigation__list-item">
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
        <li className="navigation__list-item">
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
  );
}

export default Navigation;