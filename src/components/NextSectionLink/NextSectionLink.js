import AnchorLink from 'react-anchor-link-smooth-scroll';

function NextSectionLink(props) {
  const linkClassName = `anchor-link ${props.up ? 'anchor-link_direction_up' : ''}`;
  const linkText = `${props.up ? 'scroll up' : 'scroll down'}`;

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