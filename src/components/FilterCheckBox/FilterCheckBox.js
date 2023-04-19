import "./FilterCheckBox.css";

function FilterCheckBox() {
  return (
    <div className="filter">
      <input type="checkbox" className="filter__checkBox" id="switch" />
      <label className="filter__label" for="switch"></label>
      <div className="filter__background"></div>
      <span className="filter__slider"></span>
    </div>
  )
}

export default FilterCheckBox;