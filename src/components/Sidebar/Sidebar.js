import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isLinkHover, setIsLinkHover] = React.useState(false);

  const sidebarClassName = `sidebar ${isLinkHover ? 'sidebar_active' : ''}`;

  function handleMouseOver() {
    setIsLinkHover(true);
  }

  function handleMouseOut() {
    setIsLinkHover(false);
  }

  return (
    <aside className={sidebarClassName}>
      <nav className="sidebar__navigation">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item">
            <NavLink to="/"
              className="app__link sidebar__nav-link"
              activeClassName="sidebar__nav-link_active"
              data-hover="Homepage"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
                Homepage
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/projects"
              className="app__link sidebar__nav-link"
              activeClassName="sidebar__nav-link_active"
              data-hover="Projects"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              Projects
            </NavLink>
          </li>
          <li className="sidebar__nav-item">
            <NavLink to="/contact"
              className="app__link sidebar__nav-link"
              activeClassName="sidebar__nav-link_active"
              data-hover="Contact"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="app__button sidebar__lang-button" type="button" value="en">
        <span className="sidebar__lang-text" data-hover="рус">рус</span>
      </button>
    </aside>
  );
}

export default Sidebar;