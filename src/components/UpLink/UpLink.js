import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TranslationContext } from '../../contexts/translationContext';

function UpLink(props) {
  const translation = React.useContext(TranslationContext);

  return (
    <AnchorLink href={props.anchor} className="app__link anchor-link up-link" title={translation.link.upLink} ></AnchorLink>
  );
}

export default UpLink;