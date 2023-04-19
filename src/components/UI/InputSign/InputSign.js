import "./InputSign.css";

function InputSign({ inputlabel, inputType, inputName, inputValue, errorMessage }) {
  const isValid = true;
  return (
    <fieldset className="inputSign__fieldset">
      <label className="inputSign__label">{inputlabel}</label>
      <input
        className="inputSign__text"
        value={`${inputValue}`}
        type={`${inputType}`}
        name={`${inputName}`}
        required
      ></input>
      <span className={`inputSign__error" ${isValid && "inputSign__error-active"}`}>{errorMessage}</span>
    </fieldset>
  );
}
export default InputSign;