import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/NekitCudder/how-to-learn"
            target="_blank"
            rel="noreferrer">
            Статичный сайт
            <img className="portfolio__link-icon" src={arrow} alt="стрелочка"></img>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/NekitCudder/russian-travel"
            target="_blank"
            rel="noreferrer">
            Адаптивный сайт
            <img className="portfolio__link-icon" src={arrow} alt="стрелочка"></img>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/NekitCudder/react-mesto-api-full"
            target="_blank"
            rel="noreferrer">
            Одностраничное приложение
            <img className="portfolio__link-icon" src={arrow} alt="стрелочка"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;