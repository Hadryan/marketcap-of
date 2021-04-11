import React, { useRef, useEffect } from "react";
import SelectedCoinInSearch from "./SelectedCoinInSearch";
import "../styles/Search.css";
const Search = ({
  setSearch,
  search,
  searchName,
  setDisplay,
  display,
  placeholder,
  filteredCoins,
  setSelectCoin,
  selectCoin,
  nr,
  setNr,
  setKeyPress,
  setMouseMove,
}) => {
  //ref
  const ref = useRef();

  //if display is not shown and there is a selected coin. To not have some undefined written text under the Element in search
  useEffect(() => {
    if (!display && Object.keys(selectCoin).length) {
      setSearch("");
    }
  }, [display]);
  //handlers
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
      setSearch("");
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
        if (nr !== filteredCoins.length - 1) {
          setNr(nr + 1);
        }
        break;
      case 38: //up
        if (nr !== 0) {
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
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="coin-input"
          type="text"
          value={search}
          onChange={handleChange}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
          ref={ref}
          //show placeholder if there isnt a selected coin or display is shown
          {...(Object.keys(selectCoin).length === 0 || display
            ? (placeholder = { placeholder })
            : "")}
        />
        {
          //only print out the component if there is a selected coin and display is not true
          Object.keys(selectCoin).length && !display ? (
            <div className="selected-coin-in-search-container">
              <SelectedCoinInSearch
                selectCoin={selectCoin}
                refProp={ref}
                setDisplay={setDisplay}
                search={search}
              />
            </div>
          ) : (
            ""
          )
        }
      </form>
    </div>
  );
};

export default Search;
