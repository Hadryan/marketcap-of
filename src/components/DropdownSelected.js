import React from "react";
import "../styles/DropdownSelected.css";
//styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownSelected = ({
  selectDonationCoin,
  setShowDropDown,
  showDropDown,
  setNr,
}) => {
  const handleClick = () => {
    setShowDropDown(!showDropDown);
    setNr(0);
  };
  return (
    <div className="donation-coin-selected-container" onClick={handleClick}>
      {Object.keys(selectDonationCoin).length ? (
        <img src={selectDonationCoin.image} alt="coin" />
      ) : (
        <h2>Loading...</h2>
      )}
      <h1 className="donation-coin-selected-title">
        {selectDonationCoin.name}
      </h1>

      <FontAwesomeIcon
        className={showDropDown ? "fa-down up" : "fa-down"}
        icon={faCaretDown}
      />
    </div>
  );
};
export default DropdownSelected;
