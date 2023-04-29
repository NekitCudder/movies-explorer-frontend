import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PopupMenu.css'
import openLogo from "../../images/open.svg";
import closeLogo from "../../images/close.svg";
import account from "../../images/account.svg";

function PopupMenu({ loggedIn }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleCloseMenu() {
    setIsOpenMenu(false);
  }

  return (
    <section className="popupMenu">
      <button className={`popupMenu__openButton ${loggedIn && "popupMenu__openButton_active"}`} onClick={handleOpenMenu}>
        <img className="popupMenu__openButtonImage" src={openLogo} alt="кнопка открытия" />
      </button>
      <div className={`popupMenu__box ${isOpenMenu && "popupMenu__box_active"}`}>
        <button className="popupMenu__closeButton" onClick={handleCloseMenu}>
          <img className="popupMenu__closeButtonImage" src={closeLogo} alt="крестик" />
        </button>
        <div className="popupMenu__nav">
          <Link exact to="/" className="popupMenu__link">Главная</Link>
          <Link exact to="/movies" className="popupMenu__link">Фильмы</Link>
          <Link exact to="/saved-movies" className="popupMenu__link">Сохраненные фильмы</Link>
        </div>
        <div className="popupMenu__acc">
          <p className="popupMenu__accLink">Аккаунт</p>
          <Link to="/profile" className="popupMenu__accBox">
            <img className="popupMenu__accLogo" src={account} alt='Аккаунт' />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PopupMenu;