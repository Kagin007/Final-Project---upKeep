import Button from "./Button";
import InputForm from "./InputForm";

const SearchForm = props => {
  return (
    <section className="searchform">
      <header>
        <h2>Search for Cleaners in Your Area:</h2>
      </header>
      <main>
        <InputForm placeholder="Location" />
        <InputForm placeholder="Date" type="date" />
        <Button>Search</Button>
      </main>
    </section>
  );
};

export default SearchForm;
