import "./Header.css";
import logo from "../../images/logo.svg";
import account from "../../images/account.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/Context";


function Header() {
  const loggedIn = useContext(LoginContext);
  return (
    <header className="header">
      {loggedIn ? <>

        <Link to="/" className="header__link">
          <img className="header__logo" src={logo} alt='Логотип' />
        </Link>
        <div className="header__nav">
          <div className="header__movies">
            <Link to="/movies" className="header__linkMovie">Фильмы</Link>
            <Link to="/saved-movies" className="header__linkMovie">Сохраненные фильмы</Link>
          </div>
          <div className="header__nav">
            <Link to="/profile" className="header__linkAccount">Аккаунт</Link>
            <div className="header__account">
              <img className="header__accountLogo" src={account} alt='Аккаунт' />
            </div>
          </div>
        </div>
      </>
        : <>
          <Link to="/" className="header__link">
            <img className="header__logo" src={logo} alt='Логотип' />
          </Link>
          <div className="header__nav">
            <Link to='signup' className='header__singup'>Регистрация</Link>
            <Link to='signin' className='header__singin'>Войти</Link>
          </div>
        </>
      }
    </header >
  );
}
export default Header;