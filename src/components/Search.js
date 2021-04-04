import React, { useRef } from "react";
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
  const ref = useRef();
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
      setSelectCoin(filteredCoins[0]);
      setSearch(filteredCoins[0].name);
      setDisplay(false);
      // e.target.querySelector("input").blur(); would do the same.
      ref.current.blur();
    }
  };
  const handleFocus = (e) => {};
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
          onFocus={handleFocus}
          ref={ref}
        />
      </form>
    </div>
  );
};

export default Search;
