import "./InputSign.css";

function InputSign({ inputlabel, inputType, inputName, inputValue, errorMessage, onChange, inputPattern, isValid }) {
  return (
    <fieldset className="inputSign__fieldset">
      <label className="inputSign__label">{inputlabel}</label>
      <input
        className={`inputSign__text ${isValid ? '' : "inputSign__error-input"}`}
        type={`${inputType}`}
        name={`${inputName}`}
        value={inputValue ? inputValue : ""}
        onChange={onChange}
        pattern={inputPattern}
        required
      ></input>
      <span className={`inputSign__error ${isValid !== undefined
        ? isValid ? '' : "inputSign__error-span"
        : ''
        }`}>{errorMessage}</span>
    </fieldset>
  );
}
export default InputSign;