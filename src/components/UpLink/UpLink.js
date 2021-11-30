import AnchorLink from 'react-anchor-link-smooth-scroll';

function UpLink(props) {
  return (
    <AnchorLink href={props.anchor} className="app__link anchor-link up-link"></AnchorLink>
  );
}

export default UpLink;