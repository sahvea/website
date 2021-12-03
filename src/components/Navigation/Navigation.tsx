import React from 'react';
import { NavLink } from 'react-router-dom';
import { TranslationContext } from '../../contexts/translationContext';

interface Props {
  className?: string;
  isLinkHover?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const Navigation: React.FC<Props> = ({ className, isLinkHover, onMouseEnter, onMouseLeave, onClick }) => {
  const translation = React.useContext(TranslationContext);

  const navigationClassName: string = `navigation ${className ? className : ''}`;
  const navLinkClassName: string = `app__link navigation__link ${isLinkHover ? 'navigation__link_hovered' : ''}`;
  const activeLinkClassName: string = ' navigation__link_active';


  return (
    <nav className={navigationClassName}>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <NavLink to="/"
            className={isActive => navLinkClassName + (isActive ? activeLinkClassName : '')}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            data-hover={translation.nav.main}
          >
            {translation.nav.main}
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="/projects"
            className={isActive => navLinkClassName + (isActive ? activeLinkClassName : '')}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            data-hover={translation.nav.projects}
          >
            {translation.nav.projects}
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink to="/contact"
            className={isActive => navLinkClassName + (isActive ? activeLinkClassName : '')}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
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