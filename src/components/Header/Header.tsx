import React, { Dispatch, useEffect, useState } from 'react';
import LanguageButton from '../LanguageButton/LanguageButton';
import Navigation from "../Navigation/Navigation";
import Burger from './Burger/Burger';

type THeader = {
  onLangClick: Dispatch<string>;
}

const Header: React.FC<THeader> = ({ onLangClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const headerWrapClassName = `header__wrap ${isActive ? 'header__wrap_active' : ''}`;


  function handleBurgerClick() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (isActive) {
      function handleOverlayClose(e: globalThis.MouseEvent) {
        if (!(e.target as Element).classList.contains('header__wrap_active')) {
          handleBurgerClick();
        }
      }
      document.addEventListener('click', handleOverlayClose);

      return () => document.removeEventListener('click', handleOverlayClose);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <header className="header">
      <Burger isActive={isActive} onBurgerClick={handleBurgerClick} />

      <div className={headerWrapClassName}>

        { isActive &&
        <>
          <Navigation onClick={handleBurgerClick} />
          <LanguageButton onLangClick={onLangClick} />
        </>
        }

      </div>
    </header>
  );
}

export default Header;