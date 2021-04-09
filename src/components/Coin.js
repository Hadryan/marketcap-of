import React from "react";
import "../styles/Coin.css";

const Coin = ({
  coinElement,
  index,
  name,
  image,
  symbol,
  price,
  marketcap,
  setSelectCoin,
  setDisplay,
  setSearch,
  nr,
  setNr,
  filteredCoins,
  mouseMove,
}) => {
  //when clicking on a coin in the list
  const clickHandler = () => {
    //if coinElement is defined
    if (coinElement) {
      setSelectCoin(coinElement);
      setSearch(name);
      setDisplay(false);
    }
  };
  //to change position of dropdown selector
  const mouseOverHandler = () => {
    //only set nr if mouse is in use
    if (mouseMove === true) {
      setNr(index);
    }
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
          name.length === true && name === filteredCoins[nr].name
            ? "coin-row selected-dropdown"
            : "coin-row"
        }
      >
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
          {/* <p className="coin-price">${price}</p> */}
        </div>
      </div>
    </div>
  );
};
export default Coin;
