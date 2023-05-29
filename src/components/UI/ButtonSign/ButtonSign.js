import { Link } from "react-router-dom";
import "./ButtonSign.css";

function ButtonSign({ buttonText, linkDescription, linkText, linkRoute, onCLick, isActive, errorMessage }) {
  const isSignIn = linkRoute === "/signin";

  return (
    <section className={`buttonSign button__${isSignIn ? "signin" : "signup"}`}>
      {errorMessage !== '' && (<p className="buttonSign__error">{errorMessage}</p>)}
      <button className="buttonSign__button" type="submit" onClick={onCLick} disabled={isActive ? '' : true}>{buttonText}</button>
      <p className="buttonSign__description">
        {linkDescription}
        <Link className="buttonSign__link" to={`${linkRoute}`}>{linkText}</Link>
      </p>
    </ section>
  );
}

export default ButtonSign;