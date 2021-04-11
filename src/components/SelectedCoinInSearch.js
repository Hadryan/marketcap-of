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
