import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__box">
          <div className="searchForm__inputBox">
            <img className="searchForm__icon" src={searchIcon} alt="Поиск" />
            <input className="searchForm__input" placeholder="Фильм" required></input>
          </div>
          <button className="searchForm__button">Найти</button>
        </div>
        <div className="searchForm__border"></div>
        <div className="searchForm__checkbox">
          <FilterCheckBox />
          <label className="searchForm__label" for="switch">Короткометражки</label>
        </div>
      </form>
      <div className="searchForm__line"></div>
    </section>
  );
}
export default SearchForm;