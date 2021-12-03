import React from 'react';
import Navigation from "../Navigation/Navigation";
import Burger from './Burger/Burger';

const Header: React.FC = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const headerWrapClassName = `header__wrap ${isActive ? 'header__wrap_active' : ''}`;


  function handleBurgerClick() {
    setIsActive(!isActive);
  }

  return (
    <header className="header">
      <Burger isActive={isActive} onBurgerClick={handleBurgerClick} />

      <div className={headerWrapClassName}>

        { isActive && <Navigation onClick={handleBurgerClick} /> }

      </div>
    </header>
  );
}

export default Header;