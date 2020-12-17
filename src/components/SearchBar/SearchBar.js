import "./SearchBar.css";

const SearchBar = () => {
  return (
    <span className="search">
      <input name="search" placeholder="Search Movies" className="searchbar" />
      <button className="searchbutton">Search</button>
    </span>
  );
};

export default SearchBar;
