import React, { useEffect, useState } from "react";
//ticker api
import { GetCoinTickerById } from "../api";
//styles
import "../styles/BuyCoin.css";

const BuyCoin = ({ selectACoin }) => {
  //To see if Exhange is available
  const [exchangeAvailable, setExchangeAvailable] = useState(false);
  //to have current referral link
  const [currentRefLink, setCurrentRefLink] = useState("");
  //when removing a coin there should still be shown the last selected
  const [lastCoin, setLastCoin] = useState({});
  //adding exchange info
  useEffect(() => {
    if (Object.keys(selectACoin).length) {
      GetCoinTickerById(selectACoin.id).then((result) => {
        const tickers = [...result.tickers];
        const identifiers = tickers.map((obj) => {
          return obj.market.identifier;
        });

        //could use case instead later
        if (identifiers.includes("binance")) {
          selectACoin.exchange = [
            {
              identifier: "binance",
              name: "Binance",
              reflink: "https://www.binance.com/en/register?ref=18525617",
            },
          ];
          //to save what last coin was when removing selectACoin
          setLastCoin(selectACoin);
          setCurrentRefLink(selectACoin.exchange[0].reflink);
          setExchangeAvailable(true);
        } else {
          setExchangeAvailable(false);
        }
      });
    }
    //if selectACoin does not exist
    else if (Object.keys(!selectACoin).length) {
      setExchangeAvailable(false);
    }
  }, [selectACoin]);
  return (
    <div>
      {exchangeAvailable ? (
        <a
          className="link"
          href={currentRefLink}
          target="_blank"
          rel="nofollow"
        >
          <button className="btn btn-buy">
            <p className="buy-text">Buy {lastCoin.symbol.toUpperCase()}</p>
          </button>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};
export default BuyCoin;
