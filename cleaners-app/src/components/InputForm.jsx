import classnames from "classnames";
const InputForm = props => {
  const { dark, onChange, placeholder, inputValue, name, type } = props;
  const classes = classnames("primary-input", { "primary-input-dark": dark });
  return (
    <input
      onChange={onChange}
      type={type}
      className={classes}
      placeholder={placeholder}
      value={inputValue}
      name={name}
      autoComplete="off"
    ></input>
  );
};
export default InputForm;
