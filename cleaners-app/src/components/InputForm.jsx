const InputForm = props => {
  return (
    <input
      type={props.type}
      className="primary-input"
      placeholder={props.placeholder}
    ></input>
  );
};
export default InputForm;
