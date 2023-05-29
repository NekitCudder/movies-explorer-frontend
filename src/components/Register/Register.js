import './Register.css';
import { Link } from 'react-router-dom';
import FormSign from '../UI/FormSign/FormSign';
import ButtonSign from '../UI/ButtonSign/ButtonSign';
import InputSign from '../UI/InputSign/InputSign';
import logo from "../../images/logo.svg";
import { useValidation } from '../../hook/useValidation';
import { useEffect, useState } from 'react';
import { emailPattern, namePattern } from '../../utils/constans';

function Register({ onSubmit }) {
  const { values, valuesValid, handleChange } = useValidation({}, {});
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function checkValidation() {
      const items = Object.values(valuesValid);
      if (items.length !== 0 && items.length === 3) {
        items.includes(false)
          ? setIsActiveButton(false)
          : setIsActiveButton(true);
      }
    }
    checkValidation();
  }, [valuesValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(
      values,
      setIsActiveButton,
      setErrorMessage
    );
  }

  return (
    <section className='register'>
      <Link to="/" className="register__link">
        <img className="register__logo" src={logo} alt='Логотип' />
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <FormSign>
        <InputSign
          inputlabel={"Имя"}
          inputType={"text"}
          inputName={"name"}
          inputValue={values.name}
          isValid={valuesValid.name}
          onChange={handleChange}
          inputPattern={namePattern}
          errorMessage={"Неверное имя"}
        />
        <InputSign
          inputlabel={"E-mail"}
          inputType={"email"}
          inputName={"email"}
          inputValue={values.email}
          isValid={valuesValid.email}
          onChange={handleChange}
          inputPattern={emailPattern}
          errorMessage={"Неверный e-mail"}
        />
        <InputSign
          inputlabel={"Пароль"}
          inputType={"password"}
          inputName={"password"}
          inputValue={values.password}
          isValid={valuesValid.password}
          onChange={handleChange}
          errorMessage={"Неверный пароль"}
        />
        <ButtonSign
          buttonText={"Зарегистрироваться"}
          linkDescription={"Уже зарегистрированы?"}
          linkText={"Войти"}
          linkRoute={"/signin"}
          onCLick={handleSubmit}
          isActive={isActiveButton}
          errorMessage={errorMessage}
        />
      </FormSign>
    </section>
  );
}

export default Register;