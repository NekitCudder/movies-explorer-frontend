import "./AboutProject.css";
import Title from "../Title/Title";

function AboutProject() {
  return (
    <section className="aboutProject">
      <Title title="О проекте" />
      <div className="aboutProject__textbox">
        <div className="aboutProject__columns">
          <h3 className="aboutProject__description">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__columns">
          <h3 className="aboutProject__description">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="aboutProject__graphbox">
        <div className="aboutProject__backend">
          <div className="aboutProject__backend-week">1 неделя</div>
          <p className="aboutProject__backend-description">Back-end</p>
        </div>
        <div className="aboutProject__frontend">
          <div className="aboutProject__frontend-week">4 неделя</div>
          <p className="aboutProject__frontend-description">Front-end</p>
        </div>
      </div>

    </section>
  );
}
export default AboutProject;