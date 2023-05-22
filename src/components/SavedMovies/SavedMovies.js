import "../Movies/Movies.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from "react";
import { movieShortDuration } from '../../utils/constans';

function SavedMovies({ loggedIn, savedMovies, onDeleteClick, isLoader }) {
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isNotFoundFilms, setIsNotFoundFilms] = useState(false);
  const [isMovieList, seIsMovieList] = useState(false);

  function handleFilterMovies(inputValue) {
    setInputValue(inputValue);
  }
  function handleCheckbox(e) {
    setIsChecked(e.target.checked);
  }

  useEffect(() => {
    if (filteredMoviesList.length === 0 && inputValue === '') {
      seIsMovieList(true);
      setIsNotFoundFilms(false);
    }
    else if (filteredMoviesList.length === 0) {
      seIsMovieList(false);
      setIsNotFoundFilms(true);
    }
    else {
      seIsMovieList(false);
      setIsNotFoundFilms(false);
    }
  }, [filteredMoviesList, inputValue]);

  useEffect(() => {
    let items = savedMovies.filter((film) => {
      if (isChecked) {
        return film.nameRU.toLowerCase().includes(inputValue.toLowerCase());
      }
      else {
        return (
          film.nameRU.toLowerCase().includes(inputValue.toLowerCase()) &&
          film.duration > movieShortDuration
        );
      }
    });
    setFilteredMoviesList(items);
  }, [inputValue, isChecked, savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <SearchForm
          onClickSearch={handleFilterMovies}
          onCheckbox={handleCheckbox}
          isChecked={isChecked}
        />
        {isLoader ? (
          <div className="moviesPreloader">
          </div>
        ) : isMovieList ? (
          <div className='moviesPreloader'>
            <p className='moviesPreloader__title'>Ваш список пуст</p>
          </div>
        ) : isNotFoundFilms ? (
          <div className='moviesPreloader'>
            <p className='moviesPreloader__title'>Ничего не найдено</p>
          </div>
        ) : (
          <MoviesCardList
            filteredMovies={filteredMoviesList}
            onDeleteClick={onDeleteClick}
            isSaveMovies={true}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;