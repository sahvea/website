import React, { Dispatch, MouseEvent, useContext } from 'react';
import { TranslationContext } from '../../contexts/translationContext';


interface Props {
  className?: string;
  onLangClick: Dispatch<string>;
}

const LanguageButton: React.FC<Props> = ({ className, onLangClick }) => {
  const translation = useContext(TranslationContext);
  const buttonClassName: string = `app__button app__animated-element lang-button ${className ? className : ''}`;


  function handleLangChange(e: MouseEvent<HTMLElement>) {
    const innerText: string = (e.target as HTMLElement).innerText.toLowerCase();
    let lang: string;

    innerText === 'рус'
      ? lang = 'ru'
      : lang = 'en';

    onLangClick(lang);
  }

  return (
    <button className={buttonClassName} type="button">
      <span
        className="lang-button__text"
        data-hover={translation.nav.lang}
        onClick={handleLangChange}
      >
        {translation.nav.lang}
      </span>
    </button>
  );
}

export default LanguageButton;