import Button from "./Button";
import InputForm from "./InputForm";
import useCitySuggestions from "../hooks/useCitySuggestions";
import CitySuggestions from "./CitySuggestions";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchForm = props => {
  const {
    onSearchHandler,
    onClickHandler,
    inputValue,
    citySearch,
    suggestions,
  } = useCitySuggestions();

  

  useEffect(() => props.submitHandler, []);

  

  return (
    <section className="searchform">
      <header>
        <h2>Search for Cleaners in Your Area:</h2>
      </header>
      <form onSubmit={props.submitHandler}>
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
