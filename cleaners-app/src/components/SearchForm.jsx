import Button from "./Button";
import InputForm from "./InputForm";
import useCitySuggestions from "../hooks/useCitySuggestions";
import CitySuggestions from "./CitySuggestions";

const SearchForm = props => {
  const {
    onSearchHandler,
    onClickHandler,
    inputValue,
    citySearch,
    suggestions,
  } = useCitySuggestions();

  const submitHandler = e => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <section className="searchform">
      <header>
        <h2>Search for Cleaners in Your Area:</h2>
      </header>
      <form onSubmit={submitHandler}>
        <InputForm
          placeholder="City"
          onChange={onSearchHandler}
          inputValue={inputValue}
        />
        {citySearch && (
          <CitySuggestions suggestions={suggestions} onClick={onClickHandler} />
        )}
        <InputForm placeholder="Date" type="date" />
        <Button>Search</Button>
      </form>
    </section>
  );
};

export default SearchForm;
