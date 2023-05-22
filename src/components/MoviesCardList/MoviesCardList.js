import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useResize } from "../../hook/useResize";
import { useEffect, useState } from "react";
import { moviesCount } from "../../utils/constans";

function MoviesCardList({ filteredMovies, onLikeClick, onDeleteClick, savedMovies, isSaveMovies }) {
  const isMobile = useResize();
  const [moviesCards, setMoviesCards] = useState();
  const [isMoreButton, setIsMoreButton] = useState(false);
  const [count, setCount] = useState(
    isMobile
      ? moviesCount.mobileCoint
      : moviesCount.desktopCount
  );

  useEffect(() => {
    function renderMovies() {
      const movieList = filteredMovies.map((movie, index) => {
        console.log(savedMovies)
        const isLiked = savedMovies.some((savedMovie) => {
          return movie.id === savedMovie.movieId;
        });

        if (index < count) {
          return (
            <MoviesCard
              film={movie}
              key={movie.id}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}
              isLiked={isLiked}
            />
          );
        }
      })
      return movieList;
    }

    function renderSaveMovies() {
      const movieList = filteredMovies.map((movie) => {
        console.log(filteredMovies)
        return (
          <MoviesCard
            film={movie}
            key={movie.movieId}
            onDeleteClick={onDeleteClick}
          />
        )
      });
      return movieList;
    }

    if (isSaveMovies) {
      setMoviesCards(renderSaveMovies());
    }
    else {
      setMoviesCards(renderMovies());
    }
  }, [
    filteredMovies,
    isMobile,
    isSaveMovies,
    onDeleteClick,
    onLikeClick,
    count,
    savedMovies
  ]);

  function handleMoreButton() {
    setCount(
      (data) =>
        data +
        (isMobile ? moviesCount.moreMobileButtonCount : moviesCount.moreDesktopButtonCount));
  }
  useEffect(() => {
    setIsMoreButton(filteredMovies.length > count);
  }, [count, filteredMovies]);

  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__grid">
        {moviesCards}
      </ul>
      {!isSaveMovies && isMoreButton && (
        <button className="moviesCardList__button" onClick={handleMoreButton}>Еще</button>
      )}
    </section>
  );
}
export default MoviesCardList;
