import React, { useEffect, useState } from "react";
//api
import { apiUrl, getCoinById } from "../api";
//fetch
import axios from "axios";
//style
import "../styles/Homepage.css";
//components
import Search from "../components/Search";
import CoinsList from "../components/CoinsList";
import SelectedCoin from "../components/SelectedCoin";
import Swap from "../components/Swap";
//hooks
import useClickOutside from "../hooks/useClickOutside";

const Homepage = () => {
  const [api, setApi] = useState(apiUrl);
  const [coins, setCoins] = useState([]);
  const [searchA, setSearchA] = useState("");
  const [searchB, setSearchB] = useState("");
  const [displayAList, setDisplayAList] = useState(false);
  const [displayBList, setDisplayBList] = useState(false);
  const [filteredCoinsA, setFilteredCoinsA] = useState([]);
  const [filteredCoinsB, setFilteredCoinsB] = useState([]);
  const [selectNr, setSelectNr] = useState(0);
  const [selectACoin, setSelectACoin] = useState({});
  const [selectBCoin, setSelectBCoin] = useState({});
  const [keyPress, setKeyPress] = useState(false);
  const [mouseMove, setMouseMove] = useState(false);

  //fetch all coins
  useEffect(() => {
    // setTimeout(() => {
    axios
      .get(api)
      .then((res) => {
        const data = res.data.filter(
          (coin) =>
            //quickfix to get away the common stable coins
            !coin.name.toLowerCase().includes("usd") &&
            !coin.symbol.toLowerCase().includes("usd")
        );
        getCoinById("safe-haven").then((result) => {
          data.push(result[0]);
        });
        getCoinById("oceanex-token").then((result) => {
          data.push(result[0]);
        });
        setCoins(data);
      })
      .catch((error) => console.log(error));
    // }, 4000);
  }, []);

  const aRef = useClickOutside(() => {
    setDisplayAList(false);
  });
  const bRef = useClickOutside(() => {
    setDisplayBList(false);
  });
  //handler
  const handleMouseMove = () => {
    setMouseMove(true);
  };
  return (
    <div className="homepage" onMouseMove={handleMouseMove}>
      <div className="title">
        <h1>
          Show the value of <span className="span-A">A</span> <br />
          with the market cap of
          <span className="span-B"> B</span>
        </h1>
      </div>
      <div className="search-list-container" ref={aRef}>
        <Search
          setSearch={setSearchA}
          search={searchA}
          searchName="A"
          setDisplay={setDisplayAList}
          display={displayAList}
          placeholder="e.g Ethereum"
          setSelectCoin={setSelectACoin}
          selectCoin={selectACoin}
          filteredCoins={filteredCoinsA}
          nr={selectNr}
          setNr={setSelectNr}
          setKeyPress={setKeyPress}
          setMouseMove={setMouseMove}
        />
        {displayAList ? (
          <CoinsList
            coins={coins}
            search={searchA}
            setSelectCoin={setSelectACoin}
            display={displayAList}
            setDisplay={setDisplayAList}
            setSearch={setSearchA}
            setFilteredCoins={setFilteredCoinsA}
            setNr={setSelectNr}
            nr={selectNr}
            keyPress={keyPress}
            setKeyPress={setKeyPress}
            mouseMove={mouseMove}
          />
        ) : (
          ""
        )}
      </div>
      <Swap
        setSelectACoin={setSelectACoin}
        setSelectBCoin={setSelectBCoin}
        selectACoin={selectACoin}
        selectBCoin={selectBCoin}
      />
      <div className="search-list-container" ref={bRef}>
        <Search
          setSearch={setSearchB}
          search={searchB}
          searchName="B"
          setDisplay={setDisplayBList}
          display={displayBList}
          placeholder="e.g Bitcoin"
          setSelectCoin={setSelectBCoin}
          selectCoin={selectBCoin}
          filteredCoins={filteredCoinsB}
          setNr={setSelectNr}
          nr={selectNr}
          setKeyPress={setKeyPress}
          setMouseMove={setMouseMove}
        />
        {displayBList ? (
          <CoinsList
            coins={coins}
            search={searchB}
            setSelectCoin={setSelectBCoin}
            setDisplay={setDisplayBList}
            display={displayBList}
            setSearch={setSearchB}
            setFilteredCoins={setFilteredCoinsB}
            setNr={setSelectNr}
            nr={selectNr}
            keyPress={keyPress}
            setKeyPress={setKeyPress}
            mouseMove={mouseMove}
          />
        ) : (
          ""
        )}
      </div>
      <div className="selectedCoin-div">
        <SelectedCoin
          selectACoin={selectACoin}
          selectBCoin={selectBCoin}
          displayAList={displayAList}
          displayBList={displayBList}
        />
      </div>
    </div>
  );
};
export default Homepage;
