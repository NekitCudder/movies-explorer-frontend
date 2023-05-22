import './Profile.css';
import Header from '../Header/Header';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useValidation } from '../../hook/useValidation';
import { emailPattern, namePattern } from '../../utils/constans';

function Profile({ onChange, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, valuesValid, handleChange, setValues } = useValidation(
    {}, { name: true, email: true });
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  useEffect(() => {
    function checkValidation() {
      const items = Object.values(valuesValid);
      if (items.length !== 0 && items.length===2 && (values.name !== currentUser.name || values.email !== currentUser.email)
      ) {
        items.includes(false)
          ? setIsActiveButton(false)
          : setIsActiveButton(true);
      } else {
        setIsActiveButton(false);
      }
    }
    checkValidation();
  }, [
    currentUser.name,
    currentUser.email,
    values.name,
    values.email,
    valuesValid
  ]);

  function handleUpdateInfoSubmit(e) {
    e.preventDefault();
    onChange(
      values,
      setIsActiveButton,
      setErrorMessage,
      setSuccessMessage
    );
  }

  return (
    <>
      <Header loggedIn={true} />
      <main>
        <section className="profile">
          <h2 className='profile__name'>Привет, {currentUser.name}!</h2>
          <form className='profile__form'>
            <div className='profile__inputs'>
              <label className='profile__label'>Имя</label>
              <input className='profile__input'
                value={values.name}
                name='name'
                onChange={handleChange}
                pattern={namePattern}
                required
              ></input>
            </div>
            <div className='profile__inputs'>
              <label className='profile__label'>E-mail</label>
              <input className='profile__input'
                value={values.email}
                name='email'
                onChange={handleChange}
                pattern={emailPattern}
                required
              ></input>
            </div>
            {errorMessage !== '' && (<p className={`profile__error ${successMessage && 'profile__error-success'}`}>{errorMessage}</p>)}
            <button className='profile__edit' onClick={handleUpdateInfoSubmit} disabled={isActiveButton ? '' : true}>Редактировать</button>      
          </form>
          <button className='profile__exit' onClick={onSignOut}>Выйти из аккаунта</button>
        </section>
      </main>
    </>
  );
}

export default Profile;