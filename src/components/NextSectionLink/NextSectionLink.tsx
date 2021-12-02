import React from 'react';
import { TranslationContext } from '../../contexts/translationContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  anchor: string;
  up?: boolean;
}

const NextSectionLink: React.FC<Props> = ({ anchor, up }) =>{
  const translation = React.useContext(TranslationContext);
  const linkClassName: string = `anchor-link ${up ? 'anchor-link_direction_up' : ''}`;
  const linkText: string = up ? translation.link.up : translation.link.down;

  return (
    <div className={linkClassName}>
      <div className="anchor-link__line"></div>
      <AnchorLink href={anchor} className="app__link anchor-link__link">
        <span className="anchor-link__text">{linkText}</span>
      </AnchorLink>
    </div>
  );
}

export default NextSectionLink;