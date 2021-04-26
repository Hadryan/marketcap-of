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
  setSearch,
  setFilteredCoins,
  setNr,
  nr,
  keyPress,
  mouseMove,
  donationList,
  donationCoinStyle,
  selectedDonationCoinStyle,
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

  //when keyPress is changed - scroll to html element selected
  useEffect(() => {
    //only try scroll if coins in list exists
    if (filteredCoins.length) {
      refCurrentCoin.current.childNodes[nr].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [keyPress]);

  //ref for current coin in list
  const refCurrentCoin = useRef(null);

  //handlers
  const handleMouseDown = (e) => {
    //to not get focus on scroller
    e.preventDefault();
    //go to last coin in list - 1 because first is 0 and last is 249
    //setNr(filteredCoins.length - 1);
    //to refresh and scroll to it
    //  setKeyPress(true);
  };

  return (
    <div className={"coins-container " + donationList} ref={refCurrentCoin}>
      {/* if we get any coins we start to map them out (therefore "coins.length ?") */}
      {coins.length ? (
        filteredCoins.map((coin, index) => {
          return (
            <Coin
              coins={coins}
              nr={nr}
              setNr={setNr}
              mouseMove={mouseMove}
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
              donationCoinStyle={donationCoinStyle}
              selectedDonationCoinStyle={selectedDonationCoinStyle}
            />
          );
        })
      ) : (
        //else
        <p>Loading...</p>
      )}

      {/* {nr < filteredCoins.length - 3 ? ( */}
      <div className="icon-div" onMouseDown={handleMouseDown}>
        <FontAwesomeIcon className="down" icon={faAngleDoubleDown} />
      </div>
      {/* ) : (
        ""
      )} */}
    </div>
  );
};

export default CoinsList;
