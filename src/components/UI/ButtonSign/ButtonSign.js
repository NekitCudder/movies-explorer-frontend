import { Link } from "react-router-dom";
import "./ButtonSign.css";

function ButtonSign({ buttonText, linkDescription, linkText, linkRoute }) {
  const isSignIn = linkRoute === "/signin";

  return (
    <section className={`buttonSign button__${isSignIn ? "signin" : "signup"}`}>
      <button className="buttonSign__button">{buttonText}</button>
      <p className="buttonSign__description">
        {linkDescription}
        <Link className="buttonSign__link" to={`${linkRoute}`}>{linkText}</Link>
      </p>
    </ section>
  );
}

export default ButtonSign;