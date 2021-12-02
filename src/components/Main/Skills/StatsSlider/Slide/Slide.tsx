import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Slide: React.FC<Props> = ({ title, children }) => {
  return (
    <article className="slide">
      <h3 className="slide__title">{title}</h3>
      <figure className="slide__info">

        {children}

      </figure>
    </article>

  );
}

export default Slide;