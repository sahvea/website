function Slide(props) {
  return (
    <article className="slide">
      <h3 className="slide__title">{props.title}</h3>
      <figure className="slide__info">

        {props.children}

      </figure>
    </article>

  );
}

export default Slide;