import React from "react";
import "../styles/Coin.css";

const Coin = ({
  coinElement,
  name,
  image,
  symbol,
  price,
  marketcap,
  setSelectCoin,
  setDisplay,
  setSearch,
  nr,
  filteredCoins,
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
  return (
    <div className="coin-container" onClick={clickHandler}>
      <div
        className={
          name && name === filteredCoins[nr].name
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
