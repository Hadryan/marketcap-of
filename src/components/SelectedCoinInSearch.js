import React from "react";
import "../styles/SelectedCoinInSearch.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const SelectedCoinInSearch = ({ selectCoin, refProp, setDisplay, search }) => {
  //if clicked on the close icon
  const handleClick = () => {
    refProp.current.focus();
    setDisplay(true);
  };

  return (
    <div className="container">
      <img src={selectCoin.image} alt="img-a" />
      <h3 className="symbol">{selectCoin.symbol.toUpperCase()}</h3>
      <h3 className="price">${selectCoin.current_price}</h3>
      <FontAwesomeIcon
        className="fa-times"
        icon={faTimesCircle}
        onClick={handleClick}
      />
    </div>
  );
};
export default SelectedCoinInSearch;
