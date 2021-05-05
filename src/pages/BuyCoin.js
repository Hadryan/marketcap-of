import React from "react";
import binanceLogo from "../img/binance-logo.png";
import krakenLogo from "../img/kraken-logo.png";
//component
import ExchangeBox from "../components/ExchangeBox";
//icons
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//router link
import { Link } from "react-router-dom";

const BuyCoin = ({ markets, coinName }) => {
  return (
    <div className="buy-coin-overlay">
      <div className="buy-popup">
        <header>
          <h1 className="donation-title noSelect">Buy {coinName}</h1>
          <p className="donation-description">
            Buying {coinName} is super simple. All you have to do is pick an
            exchange bellow and sign up. You will figure out the rest!
          </p>
        </header>
        {markets.includes("kraken") ? (
          <ExchangeBox
            name="Kraken"
            logo={krakenLogo}
            description="Kraken exchange is recommended to everyone"
            link="https://r.kraken.com/7mad9O"
          />
        ) : (
          ""
        )}
        {markets.includes("binance") ? (
          <ExchangeBox
            name="Binance"
            logo={binanceLogo}
            description="Binance exchange is recommended to non US citizens"
            link="https://www.binance.com/en/register?ref=18525617"
          />
        ) : (
          ""
        )}
        <Link to="/" className="link">
          <FontAwesomeIcon className="faTimes" icon={faTimes} />
        </Link>
      </div>
    </div>
  );
};
export default BuyCoin;
