import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
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
              data-hover="Homepage"
            >
              Homepage
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/projects"
              className={navLinkClassName}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              onClick={handleLinkClick}
              data-hover="Projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/contact"
              className={navLinkClassName}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              onClick={handleLinkClick}
              data-hover="Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="app__button sidebar__lang-button app__animated-element" type="button" value="en">
        <span className="sidebar__lang-text" data-hover="рус">рус</span>
      </button>
    </aside>
  );
}

export default Sidebar;