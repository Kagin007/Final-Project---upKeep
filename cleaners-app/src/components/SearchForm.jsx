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
    const date = e.target.date.value;
    const city = e.target.city.value;
    // in this submit handler create the get request to /users and get querys for the city and date
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
          name="city"
        />
        {citySearch && (
          <CitySuggestions suggestions={suggestions} onClick={onClickHandler} />
        )}
        <InputForm placeholder="Date" type="date" name="date" />
        <Button>Search</Button>
      </form>
    </section>
  );
};

export default SearchForm;
