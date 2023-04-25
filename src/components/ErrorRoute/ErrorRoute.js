import { Link } from 'react-router-dom';
import './ErrorRoute.css';

function ErrorRoute() {
  return (
    <main>
      <section className="errorRoute">
        <h1 className="errorRoute__title">404</h1>
        <p className="errorRoute__message">Страница не найдена</p>
        <Link className="errorRoute__link" to="/">Назад</Link>
      </section>
    </main>
  );

}

export default ErrorRoute;