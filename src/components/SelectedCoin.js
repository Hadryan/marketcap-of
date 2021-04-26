import React from "react";
//component
import InfoBox from "./InfoBox";
//styles
import "../styles/SelectedCoin.css";
import { calculatePrice, calculatePercentage } from "../calculatePrice";

const SelectedCoin = ({ selectACoin, selectBCoin }) => {
  const price = calculatePrice(selectACoin, selectBCoin);
  const percentage = calculatePercentage(price, selectACoin.current_price);
  const a = selectACoin;
  const b = selectBCoin;

  return (
    <div
      className="selectedCoin-container-parent"
      // //change opacity when display is true
      // style={displayAList || displayBList ? { opacity: 0.25 } : { opacity: 1 }}
    >
      {/* Only write out when there is a valid coin in both a and b */}
      {Object.keys(a).length && Object.keys(b).length ? (
        //the actual selected coin to show "value" of
        <div className="selectedCoins-container">
          <div className="img-price">
            <img className="a-img" src={a.image} alt="crypto a" />
            <h1 className="coin-prices">
              {/* Show only 2 decimals if price is over 0.1 */}
              {price > 0.1 ? "$" + price.toFixed(2) : "$" + price.toFixed(4)}
              <span
                className={
                  percentage >= 0 ? "percent positive" : "percent negative"
                }
              >
                ({percentage.toFixed(2)}%)
              </span>
            </h1>
          </div>
          {/* here is the grid of market caps */}
          <div className="text-div">
            <h2 className="market-cap-title">
              Market cap
              <InfoBox selectACoin={selectACoin} />
            </h2>
            {/* <h2 className="first-text">{a.symbol.toUpperCase()}: </h2> */}
            <h2 className="first-text first-mcap">
              ${a.market_cap.toLocaleString()}
            </h2>
            {/* <h2 className="second-text">{b.symbol.toUpperCase()}: </h2> */}
            <h2 className="second-text second-mcap">
              ${b.market_cap.toLocaleString()}
            </h2>
            <img //imgages to grid
              className="b-img first-text-img"
              src={a.image}
              alt="crypto b"
            />
            <img
              className="b-img second-text-img"
              src={b.image}
              alt="crypto a"
            />{" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectedCoin;
