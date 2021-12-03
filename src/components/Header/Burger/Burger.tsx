interface Props {
  isActive: boolean;
  onBurgerClick: () => void;
}

const Burger: React.FC<Props> = ({ isActive, onBurgerClick }) => {
  const burgerLineClassName: string = `burger__line ${isActive ? 'burger__line_active' : ''}`;

  return (
    <button className="burger app__button" type="button" onClick={onBurgerClick} >
      <span className={burgerLineClassName}></span>
      <span className={burgerLineClassName}></span>
      <span className={burgerLineClassName}></span>
    </button>
  );
}

export default Burger;