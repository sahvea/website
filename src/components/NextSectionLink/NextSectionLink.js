import AnchorLink from 'react-anchor-link-smooth-scroll';

function NextSectionLink(props) {
  return (
    <div className="anchor-link">
      <div className="anchor-link__line"></div>
      <AnchorLink href={props.anchor} className="app__link anchor-link__link">
        <span className="anchor-link__text">scroll down</span>
      </AnchorLink>
    </div>
  );
}

export default NextSectionLink;