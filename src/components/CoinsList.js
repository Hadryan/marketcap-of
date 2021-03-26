import React, { useEffect } from "react";
import Coin from "./Coin";
import "../styles/CoinsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const CoinsList = ({
  search,
  coins,
  setSelectCoin,
  setDisplay,
  setSearch,
  setFilteredCoins,
}) => {
  //filter coins to what the current search value is
  const filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      coin.symbol.includes(search.toLocaleLowerCase())
    )
      return coin;
  });

  console.log(filteredCoins[0]);
  return (
    <div className="coins-container">
      {/* if we get any coins we map them out (therefore "coins.length ?") */}
      {coins.length ? (
        filteredCoins.map((coin) => {
          return (
            <Coin
              setSearch={setSearch}
              setSelectCoin={setSelectCoin}
              coinElement={coin}
              setDisplay={setDisplay}
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
            />
          );
        })
      ) : (
        //else
        <p>Loading...</p>
      )}
      {coins.length ? (
        <div className="icon-div">
          <FontAwesomeIcon className="down" icon={faAngleDoubleDown} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CoinsList;
