import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/Context";
import logo from "../../images/logo.svg";
import account from "../../images/account.svg";
import PopupMenu from "../PopupMenu/PopupMenu";


function Header({ loggedIn }) {
  //const loggedIn = useContext(LoginContext);
  return (
    <header className="header">
      {loggedIn ? <>
        <div className="header__nav">
          <Link to="/" className="header__link">
            <img className="header__logo" src={logo} alt='Логотип' />
          </Link>
          <div className="header__nav_movies">
            <Link to="/movies" className="header__linkMovie">Фильмы</Link>
            <Link to="/saved-movies" className="header__linkMovie">Сохраненные фильмы</Link>
          </div>
        </div>
        <div className="header__nav_acc">
          <Link to="/profile" className="header__linkAccount">Аккаунт</Link>
          <div className="header__account">
            <img className="header__accountLogo" src={account} alt='Аккаунт' />
          </div>
        </div>
        <PopupMenu />
      </>
        : <>
          <Link to="/" className="header__link">
            <img className="header__logo" src={logo} alt='Логотип' />
          </Link>
          <div className="header__nav_sign">
            <Link to='signup' className='header__signup'>Регистрация</Link>
            <Link to='signin' className='header__signin'>Войти</Link>
          </div>
        </>
      }
    </header >
  );
}
export default Header;