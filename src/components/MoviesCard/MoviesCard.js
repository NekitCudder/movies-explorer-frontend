import "./MoviesCard.css";
import save from "../../images/save.svg";
import remove from "../../images/delete.svg";
import movie from "../../images/movie.png";
import { useLocation } from "react-router-dom";

function MoviesCard() {

  let path = useLocation();
  const isMoviesPath = path.pathname === "/movies";

  return (
    <section className="moviesCard">
      <div className="moviesCard__info">
        <div className="moviesCard__description">
          <h3 className="moviesCard__name">Skate Kitchen</h3>
          <p className="moviesCard__time">1ч 46м</p>
        </div>
        {isMoviesPath ?
          (
            <button className="moviesCard__button">
              <img className="moviesCard__save" src={save} alt='Сохранить' />
            </button>
          ) :
          (
            <button className="moviesCard__button">
              <img className="moviesCard__save" src={remove} alt='Удалить' />
            </button>
          )
        }
      </div>
      <img className="moviesCard__image" src={movie} alt="Кадр из фильма" />
    </section>
  );
}

export default MoviesCard;