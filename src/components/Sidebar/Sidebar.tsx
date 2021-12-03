import React, { Dispatch } from 'react';
import LanguageButton from '../LanguageButton/LanguageButton';
import Navigation from '../Navigation/Navigation';

interface Props {
  onLangClick: Dispatch<string>;
}

const Sidebar: React.FC<Props> = ({ onLangClick }) =>{
  const [isLinkHover, setIsLinkHover] = React.useState<boolean>(false);
  const sidebarClassName: string = `sidebar ${isLinkHover ? 'sidebar_active' : ''}`;

  return (
    <aside className={sidebarClassName}>
      <Navigation className={'sidebar__navigation'} isLinkHover={isLinkHover} onLinkHover={setIsLinkHover} />

      <LanguageButton className={'sidebar__lang-button'} onLangClick={onLangClick} />
    </aside>
  );
}

export default Sidebar;