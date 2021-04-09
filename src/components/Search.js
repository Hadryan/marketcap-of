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
  nr,
  setNr,
  setKeyPress,
  setMouseMove,
}) => {
  const ref = useRef();
  const handleChange = (e) => {
    setSearch(e.target.value);
    setDisplay(true);
    setNr(0);
  };
  const handleClick = () => {
    setDisplay(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (filteredCoins[nr]) {
      setSelectCoin(filteredCoins[nr]);
      setSearch(filteredCoins[nr].name);
      setDisplay(false);
      // e.target.querySelector("input").blur(); would do the same.
      ref.current.blur();
    }
  };
  //when input is blurred we set the selected drop down number to 0
  const handleBlur = () => {
    setNr(0);
  };
  //function for changing dropdown nr when pressing down or up key
  const handleKeyDown = (e) => {
    //for useEffect for scroll @CoinList
    setKeyPress(true);
    //for pointer not to integrate with list
    setMouseMove(false);
    switch (e.keyCode) {
      case 40: //down
        if (nr != filteredCoins.length - 1) {
          setNr(nr + 1);
        }
        break;
      case 38: //up
        if (nr != 0) {
          setNr(nr - 1);
        }
        break;
    }
  };
  const handleKeyUp = () => {
    setKeyPress(false);
  };
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
          ref={ref}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
          // onFocus={handleFocus}
        />
      </form>
    </div>
  );
};

export default Search;
