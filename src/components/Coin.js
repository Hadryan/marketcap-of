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
}) => {
  const clickHandler = () => {
    //if coinElement is defined
    if (coinElement) {
      setSelectCoin(coinElement);
      setSearch(name);
      setDisplay(false);
    } else return;
  };
  return (
    <div className="coin-container" onClick={clickHandler}>
      <div className="coin-row">
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
