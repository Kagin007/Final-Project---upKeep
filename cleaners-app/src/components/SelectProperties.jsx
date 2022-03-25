import classnames from "classnames";
const SelectProperties = props => {
  const { dark } = props;
  const classes = classnames("primary-input", { "primary-select-dark": dark });
  return (
    <select name="property" className={classes}>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
  );
};
export default SelectProperties;
