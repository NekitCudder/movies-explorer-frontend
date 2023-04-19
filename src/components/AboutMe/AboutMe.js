import "./AboutMe.css";
import Title from "../Title/Title";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <section className="aboutMe">
      <Title title="Студент" />
      <div className="aboutMe__box">
        <div className="aboutMe__info">
          <h2 className="aboutMe__name">Виталий</h2>
          <h3 className="aboutMe__profession">Фронтенд-разработчик, 30 лет</h3>
          <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="aboutMe__link" href="https://github.com/NekitCudder" target="_blank" rel="noreferrer">Github</a>
        </div>

        <img className="aboutMe__photo" alt="Фотография студента" src={photo}></img>
      </div>
    </section>
  );
}

export default AboutMe;