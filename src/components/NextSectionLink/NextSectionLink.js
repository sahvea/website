import React from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function NextSectionLink(props) {
  const translation = React.useContext(TranslationContext);
  const linkClassName = `anchor-link ${props.up ? 'anchor-link_direction_up' : ''}`;
  const linkText = props.up ? translation.link.up : translation.link.down;

  return (
    <div className={linkClassName}>
      <div className="anchor-link__line"></div>
      <AnchorLink href={props.anchor} className="app__link anchor-link__link">
        <span className="anchor-link__text">{linkText}</span>
      </AnchorLink>
    </div>
  );
}

export default NextSectionLink;