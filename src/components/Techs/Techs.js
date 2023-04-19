import "./Techs.css";
import Title from "../Title/Title";

function Techs() {
  return (
    <section className="techs">
      <Title title="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__box">
        <p className="techs__stack">HTML</p>
        <p className="techs__stack">CSS</p>
        <p className="techs__stack">JS</p>
        <p className="techs__stack">React</p>
        <p className="techs__stack">Git</p>
        <p className="techs__stack">Express.js</p>
        <p className="techs__stack">mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;