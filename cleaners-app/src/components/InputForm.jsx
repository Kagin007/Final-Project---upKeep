const InputForm = props => {
  return (
    <input
      onChange={props.onChange}
      type={props.type}
      className="primary-input"
      placeholder={props.placeholder}
      value={props.inputValue}
      name={props.name}
    ></input>
  );
};
export default InputForm;
