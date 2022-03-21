import { useState } from "react";
const useCitySuggestions = () => {
  const canadianCities = [
    "Toronto",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "Ottawa",
    "Montreal",
    "Windsor",
    "Sarnia",
    "London",
    "Victoria",
    "St.Johns",
    "Moncton",
    "Fredericton",
    "Halifax",
    "Quebec City",
    "Winnipeg",
    "Hamilton",
    "Kingston",
    "Charlottetown",
    "Regina",
    "Thunder Bay",
    "Surrey",
  ];
  const [inputValue, setInputValue] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const onSearchHandler = e => {
    setInputValue(e.target.value);
    setCitySearch(e.target.value);
    const regex = new RegExp(
      `^${e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)}`,
      "i"
    );
    setSuggestions(canadianCities.filter(city => regex.test(city)));
    if (suggestions.length === 0) {
      setCitySearch("");
    }
  };
  const onClickHandler = e => {
    setInputValue(e);
    setCitySearch("");
  };
  return {
    onSearchHandler,
    onClickHandler,
    inputValue,
    citySearch,
    suggestions,
  };
};

export default useCitySuggestions;
