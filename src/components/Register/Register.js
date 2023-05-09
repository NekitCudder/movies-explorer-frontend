import './Register.css';
import { Link } from 'react-router-dom';
import FormSign from '../UI/FormSign/FormSign';
import ButtonSign from '../UI/ButtonSign/ButtonSign';
import InputSign from '../UI/InputSign/InputSign';
import logo from "../../images/logo.svg";

function Register() {
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
          inputValue={"Виталий"}
        />
        <InputSign
          inputlabel={"E-mail"}
          inputType={"email"}
          inputName={"email"}
          inputValue={"pochta@yandex.ru"}
        />
        <InputSign
          inputlabel={"Пароль"}
          inputType={"password"}
          inputName={"password"}
          inputValue={"1234567890"}
          errorMessage={"Что-то пошло не так..."}
        />
        <ButtonSign
          buttonText={"Зарегистрироваться"}
          linkDescription={"Уже зарегистрированы?"}
          linkText={"Войти"}
          linkRoute={"/signin"}
        />
      </FormSign>
    </section>
  );
}

export default Register;