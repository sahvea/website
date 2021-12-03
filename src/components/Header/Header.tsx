import React from 'react';
// import Navigation from "../Navigation/Navigation";
import Burger from './Burger/Burger';

const Header: React.FC = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const headerClassName = `header ${isActive ? 'header_active' : ''}`;


  function handleBurgerClick() {
    setIsActive(!isActive);
  }

  return (
    <header className={headerClassName}>
      <Burger isActive={isActive} onBurgerClick={handleBurgerClick} />

      {/* <Navigation /> */}
    </header>
  );
}

export default Header;