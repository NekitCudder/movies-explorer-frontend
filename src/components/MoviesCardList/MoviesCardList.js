import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__grid">
        <li><MoviesCard/></li>
        <li><MoviesCard/></li>
        <li><MoviesCard/></li>
        <li><MoviesCard/></li>
        <li><MoviesCard/></li>
        <li><MoviesCard/></li>
        <li><MoviesCard/></li>
        <li><MoviesCard/></li>
      </ul>
      <button className="moviesCardList__button">Еще</button>
    </section>
  );
}
export default MoviesCardList;