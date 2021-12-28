import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TranslationContext } from '../../contexts/translationContext';

interface Props {
  anchor: string;
}

const UpLink: React.FC<Props> = ({ anchor }) => {
  const translation = useContext(TranslationContext);

  return (
    <AnchorLink href={anchor} className="app__link anchor-link up-link" title={translation.link.upLink} ></AnchorLink>
  );
}

export default UpLink;