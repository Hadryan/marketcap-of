import React from "react";
import "../styles/Coin.css";

const Coin = ({
  coinElement,
  index,
  name,
  image,
  symbol,
  setSelectCoin,
  setDisplay,
  setSearch,
  nr,
  setNr,
  filteredCoins,
  mouseMove,
  donationCoinStyle,
  selectedDonationCoinStyle,
}) => {
  //when clicking on a coin in the list
  const clickHandler = () => {
    //if coinElement is defined
    if (coinElement) {
      setSelectCoin(coinElement);
      setSearch("");
      setDisplay(false);
    }
  };
  //to change position of dropdown selector
  const mouseOverHandler = () => {
    //only set nr if mouse is in use
    if (mouseMove === true) {
      setNr(index);
    }
    return;
  };
  return (
    <div
      className="coin-container"
      onClick={clickHandler}
      onMouseOver={mouseOverHandler}
    >
      <div
        className={
          //to get the color on selected coin
          // if selected a donation coin, then hide the highligt when selected, and do hover instead
          name === filteredCoins[nr].name
            ? `coin-row selected-dropdown
              ${donationCoinStyle} ${selectedDonationCoinStyle}`
            : `coin-row ${donationCoinStyle}`
        }
      >
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          {!donationCoinStyle ? <p className="coin-symbol">{symbol}</p> : ""}
          {/* <p className="coin-price">${price}</p> */}
        </div>
      </div>
    </div>
  );
};
export default Coin;
