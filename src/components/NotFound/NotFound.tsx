import React from 'react';
import { Link } from 'react-router-dom';
import { TranslationContext } from '../../contexts/translationContext';
import gearImg from '../../images/icons/gear.svg';

const NotFound: React.FC = () => {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="not-found app__section">
      <h1 className="not-found__error">
        <span>4</span>
        <img className="not-found__gear-img" src={gearImg} alt="0" />
        <span>4</span>
      </h1>
      <p className="not-found__message">{translation.notFound.message}</p>
      <Link to="/" className="not-found__return app__link">{translation.notFound.link}</Link>
    </section>
  );
}

export default NotFound;