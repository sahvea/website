import React, { Dispatch, useState } from 'react';
import LanguageButton from '../LanguageButton/LanguageButton';
import Navigation from '../Navigation/Navigation';

interface Props {
  onLangClick: Dispatch<string>;
}

const Sidebar: React.FC<Props> = ({ onLangClick }) =>{
  const [isLinkHover, setIsLinkHover] = useState<boolean>(false);
  const sidebarClassName: string = `sidebar ${isLinkHover ? 'sidebar_active' : ''}`;


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
      <Navigation
        className={'sidebar__navigation'}
        isLinkHover={isLinkHover}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        onClick={handleLinkClick}
      />

      <LanguageButton className={'sidebar__lang-button'} onLangClick={onLangClick} />
    </aside>
  );
}

export default Sidebar;