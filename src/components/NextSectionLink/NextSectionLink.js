import AnchorLink from 'react-anchor-link-smooth-scroll';

function NextSectionLink(props) {
  return (
    <div className="anchor-link">
      <AnchorLink href={props.anchor} className="app__link anchor-link__link">scroll down</AnchorLink>
    </div>
  );
}

export default NextSectionLink;