import React from "react";
import "../styles/Search.css";
const Search = ({ setSearch, search, searchName, setDisplay, placeholder }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setDisplay(true);
  };
  const handleClick = () => {
    setDisplay(true);
  };
  const handleSubmit = () => {
    return;
  };
  //ref

  return (
    <div className="coin-search">
      <h1 className="coin-text">
        Select <span className={"span-" + searchName}>{searchName}</span>
      </h1>
      <form>
        <input
          className="coin-input"
          type="text"
          value={search}
          placeholder={placeholder}
          onChange={handleChange}
          onClick={handleClick}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Search;
