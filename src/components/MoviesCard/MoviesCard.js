import "./MoviesCard.css";
import liked from "../../images/liked.svg";
import remove from "../../images/delete.svg";
import unlike from "../../images/unlike.svg";
import { useLocation } from "react-router-dom";

function MoviesCard({ film, onLikeClick, onDeleteClick, isLiked }) {

  let path = useLocation();
  const isMoviesPath = path.pathname === "/movies";
  const hour = (film.duration / 60).toFixed(0);
  const min = film.duration % 60;

  function handleLikeCLick(e) {
    e.preventDefault();
    if (isLiked) {
      onDeleteClick(film);
    }
    else {
      onLikeClick(film);
    }
  }

  function handleDeleteCLick(e) {
    e.preventDefault();
    onDeleteClick(film);
  }

  return (
    <section className="moviesCard">
      <div className="moviesCard__info">
        <div className="moviesCard__description">
          <h3 className="moviesCard__name">{film.nameRU}</h3>
          <p className="moviesCard__time">{hour}ч {min < 10 ? '0' + min : min}м</p>
        </div>
        {isMoviesPath ?
          (
            <button className="moviesCard__button" onClick={handleLikeCLick}>
              <img className="moviesCard__save" src={isLiked ? liked : unlike} alt='Сохранить' />
            </button>
          ) :
          (
            <button className="moviesCard__button" onClick={handleDeleteCLick}>
              <img className="moviesCard__save" src={remove} alt='Удалить' />
            </button>
          )
        }
      </div>
      <img className="moviesCard__image" src={isMoviesPath ? `https://api.nomoreparties.co${film.image.url}` : film.image} alt="Кадр из фильма" />
    </section>
  );
}

export default MoviesCard;