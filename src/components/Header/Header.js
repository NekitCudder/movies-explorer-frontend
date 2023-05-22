import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import account from "../../images/account.svg";
import PopupMenu from "../PopupMenu/PopupMenu";


function Header() {
  let location = useLocation();
  const pathMain = location.pathname === "/";
  return (
    <header className="header">
      {pathMain ?
        <>
          <Link to="/" className="header__link">
            <img className="header__logo" src={logo} alt='Логотип' />
          </Link>
          <div className="header__navSign">
            <Link to='signup' className='header__signup'>Регистрация</Link>
            <Link to='signin' className='header__signin'>Войти</Link>
          </div>
        </>
        :
        <>
          <div className="header__nav">
            <Link to="/" className="header__link">
              <img className="header__logo" src={logo} alt='Логотип' />
            </Link>
            <div className="header__navMovies">
              <Link to="/movies" className="header__linkMovie">Фильмы</Link>
              <Link to="/saved-movies" className="header__linkMovie">Сохраненные фильмы</Link>
            </div>
          </div>
          <div className="header__navAccount">
            <p className="header__linkAccount">Аккаунт</p>
            <Link to="/profile" className="header__account">
              <img className="header__accountLogo" src={account} alt='Аккаунт' />
            </Link>
          </div>
          <PopupMenu />
        </>
      }
    </header >
  );
}
export default Header;