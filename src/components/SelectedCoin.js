import React from "react";
import Coin from "./Coin";
//styles
import "../styles/SelectedCoin.css";
import { calculatePrice, calculatePercentage } from "../calculatePrice";

const SelectedCoin = ({ selectFromCoin, selectToCoin }) => {
  const price = calculatePrice(selectFromCoin, selectToCoin);
  const percentage = calculatePercentage(price, selectFromCoin.current_price);
  const a = selectFromCoin;
  const b = selectToCoin;

  return (
    <div className="selectedCoin-container-parent">
      {/* Only write out when there is a valid coin in both from and to */}
      {Object.keys(a).length && Object.keys(b).length ? (
        <div className="selectedCoins-container">
          <div className="img-price">
            <img className="a-img" src={a.image} alt="crypto a" />
            <h1 className="coin-prices">
              ${price.toFixed(2)}
              <span
                className={
                  percentage >= 0 ? "percent positive" : "percent negative"
                }
              >
                ({percentage.toFixed(2)}%)
              </span>
            </h1>
          </div>
          <div className="text-div">
            <h2 className="text">
              <span className="first-text">
                Thank you
                <img className="b-img" src={b.image} alt="crypto b" />
                {b.symbol.toUpperCase()} for giving
              </span>
              <span className="second-text">
                <img className="b-img" src={a.image} alt="crypto a" />{" "}
                {a.symbol.toUpperCase()} a market cap of: $
                {b.market_cap.toLocaleString()}
              </span>
            </h2>
            <h3>Original market cap: ${a.market_cap.toLocaleString()}</h3>
          </div>
          {/* <p className="coin-marketcap">${a.market_cap.toLocaleString()}</p> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectedCoin;
