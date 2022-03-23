import Button from "./Button";
import InputForm from "./InputForm";
import useCitySuggestions from "../hooks/useCitySuggestions";
import CitySuggestions from "./CitySuggestions";
import axios from "axios";
import React, {useEffect, useState} from 'react'

const SearchForm = props => {
  const {
    onSearchHandler,
    onClickHandler,
    inputValue,
    citySearch,
    suggestions,
  } = useCitySuggestions();

  const [query, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    const date = e.target.date.value;
    const city = e.target.city.value;
    axios.get(`/api/v1/users?city=${city}&date=${date}`)
    .then(res => {
      setQuery(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  };

  useEffect(submitHandler, [])

  if (!query) return null;

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
