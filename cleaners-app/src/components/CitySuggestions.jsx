const CitySuggestions = props => {
  return (
    <ul className="search-suggestions">
      {props.suggestions.map(suggestion => (
        <li
          key={suggestion}
          className="search-suggestion-item"
          onClick={e => {
            props.onClick(e.target.innerHTML);
          }}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default CitySuggestions;
