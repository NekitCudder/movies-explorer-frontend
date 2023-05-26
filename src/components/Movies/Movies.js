import "./Movies.css"
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from "react";
import { movieShortDuration } from '../../utils/constans';

function Movies({ firstSearch, movies, onLikeClick, onDeleteClick, isLoader, savedMovies }) {

  const localInputValue = localStorage.getItem('inputValue');
  const checkboxValue = localStorage.getItem('checkboxValue');
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [isFirstLog, setIsFirstLog] = useState(false);
  const [isNotFoundFilms, setIsNotFoundFilms] = useState(false);
  const [inputValue, setInputValue] = useState(
    localInputValue !== null ? localInputValue : ''
  );
  const [isChecked, setIsChecked] = useState(
    checkboxValue !== null
      ? checkboxValue === 'true'
        ? true
        : false
      : false
  );
  const [searchMessage, setSearchMessage] = useState('');


  function handleFilterMovies(inputValue) {
    setInputValue(inputValue);
    localStorage.setItem('inputValue', inputValue);
  }
  function handleCheckbox(e) {
    setIsChecked(e.target.checked);
    localStorage.setItem('checkboxValue', e.target.checked);
  }

  useEffect(() => {
    if (filteredMoviesList.length === 0 && inputValue === '') {
      setIsFirstLog(true);
      setIsNotFoundFilms(false);
    }
    else if (filteredMoviesList.length === 0) {
      setIsFirstLog(false);
      setIsNotFoundFilms(true);
    }
    else {
      setIsFirstLog(false);
      setIsNotFoundFilms(false);
    }
  }, [filteredMoviesList, inputValue]);

  useEffect(() => {
    if (isFirstLog && inputValue !== '') {
      firstSearch();
    }
  }, [inputValue, isFirstLog]);

  useEffect(() => {
    if (inputValue !== '') {
      setSearchMessage('');
      let items = movies.filter((film) => {
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
    }
    else {
      setSearchMessage('Необходимо ввести ключевое слово');
    }
  }, [inputValue, isChecked, movies])

  return (
    <>
      <SearchForm
        onClickSearch={handleFilterMovies}
        onCheckbox={handleCheckbox}
        isValue={inputValue}
        isChecked={isChecked}
        searchMessage={searchMessage}
      />
      {isLoader ? (
        <div className="moviesPreloader">
        </div>
      ) : isFirstLog ? (
        <div className='moviesPreloader'>
          <h2 className='moviesPreloader__title'>Начните поиск</h2>
        </div>
      ) : isNotFoundFilms ? (
        <div className='moviesPreloader'>
          <h2 className='moviesPreloader__title'>Ничего не найдено</h2>
        </div>
      ) : (
        <MoviesCardList
          filteredMovies={filteredMoviesList}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
          savedMovies={savedMovies}
          isSaveMovies={false}
        />
      )}
    </>
  );
}
export default Movies;