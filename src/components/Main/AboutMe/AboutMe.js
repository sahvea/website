import NextSectionLink from '../../NextSectionLink/NextSectionLink';

function AboutMe() {
  return (
    <section className="about app__section" id="about">
      <h2 className="app__section-title">/About me</h2>


      <NextSectionLink anchor={'#skills'} />
    </section>
  );
}

export default AboutMe;