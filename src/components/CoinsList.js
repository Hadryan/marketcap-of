import React, { useEffect, useRef } from "react";
import Coin from "./Coin";
import "../styles/CoinsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const CoinsList = ({
  search,
  coins,
  setSelectCoin,
  setDisplay,
  display,
  setSearch,
  setFilteredCoins,
  setNr,
  nr,
}) => {
  //filter coins to what the current search value is
  const filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      coin.symbol.includes(search.toLocaleLowerCase())
    )
      return coin;
  });
  //useeffects
  //set filtered coins when input is changed
  useEffect(() => {
    setFilteredCoins(filteredCoins);
  }, [search]);
  //when dropdown select number is changed - scroll when nr > 3
  useEffect(() => {
    // ref.current.scrollIntoView();
    console.log(ref);
  }, [nr]);
  const ref = useRef(null);
  const scrollHandler = () => {
    console.log("scrolling");
  };
  return (
    <div className="coins-container" onScroll={scrollHandler}>
      {/* if we get any coins we start to map them out (therefore "coins.length ?") */}
      {coins.length ? (
        filteredCoins.map((coin, index) => {
          return (
            <Coin
              refProp={ref}
              nr={nr}
              setNr={setNr}
              filteredCoins={filteredCoins}
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
              index={index}
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
