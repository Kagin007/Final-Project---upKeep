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

  return (
    <section className="searchform">
      <header>
        <h2>Search for Cleaners in Your Area:</h2>
      </header>
      <main>
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
      </main>
    </section>
  );
};

export default SearchForm;
