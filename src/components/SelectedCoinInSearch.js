import React from "react";
import "../styles/SelectedCoinInSearch.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SelectedCoinInSearch = ({
  selectCoin,
  setSelectCoin,
  setExchangeAvailable,
}) => {
  //if clicked on the close icon
  const handleClick = () => {
    setSelectCoin({});
  };

  return (
    <div className="coin-in-search-container">
      <img src={selectCoin.image} alt="img-a" />
      <h4 className="symbol">{selectCoin.symbol.toUpperCase()}</h4>
      <h4 className="price">${selectCoin.current_price}</h4>
      <FontAwesomeIcon
        className="fa-times"
        icon={faTimesCircle}
        onClick={handleClick}
      />
    </div>
  );
};
export default SelectedCoinInSearch;
