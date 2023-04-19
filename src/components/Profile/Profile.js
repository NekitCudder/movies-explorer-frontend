import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header loggedIn={true} />
      <main>
        <section className="profile">
          <h2 className='profile__name'>Привет, Виталий!</h2>
          <form className='profile__form'>
            <div className='profile__inputs'>
              <label className='profile__label'>Имя</label>
              <input className='profile__input' value="Виталий" required></input>
            </div>
            <div className='profile__inputs'>
              <label className='profile__label'>E-mail</label>
              <input className='profile__input' value="pochta@yandex.ru" required></input>
            </div>
            <button className='profile__edit'>Редактировать</button>
            <button className='profile__exit'>Выйти из аккаунта</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;