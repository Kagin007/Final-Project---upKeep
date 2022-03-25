import classnames from "classnames";
const SelectProperties = props => {
  const { dark, properties } = props;
  console.log(properties);
  const classes = classnames("primary-input", { "primary-select-dark": dark });
  return (
    <select name="property" className={classes}>
      {properties &&
        properties.map((property, i) => (
          <option value="#" key={i}>
            {property.address}
          </option>
        ))}
      {/* <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option> */}
    </select>
  );
};
export default SelectProperties;
