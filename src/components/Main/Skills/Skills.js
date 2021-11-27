import NextSectionLink from '../../NextSectionLink/NextSectionLink';

function Skills() {
  return (
    <section className="skills app__section" id="skills">
      <h2 className="app__section-title">/Skill set</h2>

      <div className="app__section-content">

        <figure className="skills__statistics">
          <embed src="https://wakatime.com/share/@sahvea/02511174-7afa-4808-9f72-f583073f3c6d.svg"></embed>
        </figure>
      </div>

      <NextSectionLink anchor={'#about'} up={true} />
    </section>
  );
}

export default Skills;