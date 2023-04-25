import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PopupMenu.css'
import open from "../../images/open1.svg";
import close from "../../images/close1.svg";
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
        <img className="popupMenu__openButtonImage" srs={open} alt="кнопка открытия" />
      </button>
      <div className={`popupMenu__box ${isOpenMenu && "popupMenu__box_active"}`}>
        <button className="popupMenu__closeButton" onClick={handleCloseMenu}>
          <img className="popupMenu__closeButtonImage" srs={close} alt="крестик" />
        </button>
        <div className="popupMenu__nav">
          <Link exact to="/" className="popupMenu__link" activeClass="popupMenu__link_active">Главная</Link>
          <Link exact to="/movies" className="popupMenu__link" activeClass="popupMenu__link_active">Фильмы</Link>
          <Link exact to="/saved-movies" className="popupMenu__link" activeClass="popupMenu__link_active">Сохраненные фильмы</Link>
        </div>
        <div className="popupMenu__acc">
          <Link to="/profile" className="popupMenu__accLink">Аккаунт</Link>
          <div className="popupMenu__accBox">
            <img className="popupMenu__accLogo" src={account} alt='Аккаунт' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopupMenu;