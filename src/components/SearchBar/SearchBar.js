import { useState } from "react";
import { useHistory } from "react-router";
import "./SearchBar.css";

const SearchBar = (props) => {
  const history = useHistory();
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (query !== undefined && query !== "") {
      history.push(`/search?${query}`);
    }
  };

  const handleHomeButton = () => {
    history.push("/");
  };

  return (
    <span className="search">
      <input
        name="search"
        placeholder="Search Movies"
        onChange={(e) => setQuery(e.target.value)}
        className="searchbar"
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            handleSubmit();
          }
        }}
      />
      <button className="searchbutton" onClick={handleSubmit}>
        Search
      </button>
      <button className="homebutton" onClick={handleHomeButton}>
        Home
      </button>
    </span>
  );
};

export default SearchBar;
