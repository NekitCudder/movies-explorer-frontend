import "./Login.css";
import FormSign from '../UI/FormSign/FormSign';
import ButtonSign from '../UI/ButtonSign/ButtonSign';
import InputSign from '../UI/InputSign/InputSign';
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className='register'>
      <img className="register__logo" src={logo} alt="Логотип" />
      <h2 className="register__title">Рады видеть!</h2>
      <FormSign>
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
        />
        <ButtonSign
          buttonText={"Войти"}
          linkDescription={"Еще не зарегистрированы?"}
          linkText={"Регистрация"}
          linkRoute={"/signup"}
        />
      </FormSign>
    </section>
  );
}

export default Register;