import { useNavigate } from 'react-router-dom';
import './ErrorRoute.css';

function ErrorRoute() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <main>
      <section className="errorRoute">
        <h1 className="errorRoute__title">404</h1>
        <p className="errorRoute__message">Страница не найдена</p>
        <button type='button' className="errorRoute__link" onClick={handleClick}>Назад</button>
      </section>
    </main>
  );

}

export default ErrorRoute;