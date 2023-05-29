import "./FilterCheckBox.css";

function FilterCheckBox({ onClick, isChecked }) {
  return (
    <div className="filter">
      <input type="checkbox" className="filter__checkBox" onChange={onClick} checked={isChecked} id="switch" />
      <label className="filter__label" for="switch"></label>
      <div className="filter__background"></div>
      <span className="filter__slider"></span>
    </div>
  )
}

export default FilterCheckBox;