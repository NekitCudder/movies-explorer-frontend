import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import { useState } from "react";

function SearchForm({ onClickSearch, onCheckbox, isValue, isChecked, searchMessage }) {

  const [isFilmFilter, setIsFilmFilter] = useState(isValue ? isValue : '');

  function handleInputFilter(e) {
    e.preventDefault();
    setIsFilmFilter(e.target.value);
  }

  function handleButtonFilter(e) {
    e.preventDefault();
    onClickSearch(isFilmFilter);
  }

  return (
    <section className="searchForm">
      <form className="searchForm__form" onClick={handleButtonFilter}>
        <div className="searchForm__box">
          <div className="searchForm__inputBox">
            <img className="searchForm__icon" src={searchIcon} alt="Поиск" />
            <input className="searchForm__input" value={isFilmFilter} onChange={handleInputFilter} placeholder="Фильм" required></input>
          </div>
          <button type='submit' className="searchForm__button" >Найти</button>
        </div>
        <div className="searchForm__border"></div>
        <div className="searchForm__checkbox">
          <FilterCheckBox
            onClick={onCheckbox}
            isChecked={isChecked}
          />
          <label className="searchForm__label" onClick={onCheckbox} for="switch">Короткометражки</label>
        </div>
      </form>
      <span className="searchForm__error">{searchMessage}</span>
      <div className="searchForm__line"></div>
    </section>
  );
}
export default SearchForm;