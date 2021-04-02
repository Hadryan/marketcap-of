import React from "react";
import "../styles/Search.css";
const Search = ({
  setSearch,
  search,
  searchName,
  setDisplay,
  placeholder,
  filteredCoins,
  setSelectCoin,
}) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setDisplay(true);
  };
  const handleClick = () => {
    setDisplay(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (filteredCoins[0]) {
      setSearch(filteredCoins[0].name);
      setDisplay(false);
      setSelectCoin(filteredCoins[0]);
    }
  };
  //ref

  return (
    <div className="coin-search">
      <h1 className="coin-text">
        Select <span className={"span-" + searchName}>{searchName}</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="coin-input"
          type="text"
          value={search}
          placeholder={placeholder}
          onChange={handleChange}
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

export default Search;
