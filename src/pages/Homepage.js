import React, { useEffect, useState } from "react";
//api
import { apiUrl } from "../api";
//fetch
import axios from "axios";
//style
import "../styles/Homepage.css";
//components
import Search from "../components/Search";
import CoinsList from "../components/CoinsList";
import SelectedCoin from "../components/SelectedCoin";
//hooks
import useClickOutside from "../hooks/useClickOutside";

const Homepage = () => {
  const [api, setApi] = useState(apiUrl);
  const [coins, setCoins] = useState([]);
  const [searchA, setSearchA] = useState("");
  const [searchB, setSearchB] = useState("");
  const [displayAList, setDisplayAList] = useState(false);
  const [displayBList, setDisplayBList] = useState(false);
  const [filteredCoinsA, setFilteredCoinsA] = useState({});
  const [filteredCoinsB, setFilteredCoinsB] = useState({});
  const [selectNr, setSelectNr] = useState(0);
  const [selectACoin, setSelectACoin] = useState({});
  const [selectBCoin, setSelectBCoin] = useState({});
  const [keyPress, setKeyPress] = useState(false);
  const [mouseMove, setMouseMove] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    axios
      .get(api)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
    // }, 4000);
  }, []);
  console.log(mouseMove);
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
          placeholder="e.g Ethereum"
          setSelectCoin={setSelectACoin}
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

      <div className="search-list-container" ref={bRef}>
        <Search
          setSearch={setSearchB}
          search={searchB}
          searchName="B"
          setDisplay={setDisplayBList}
          placeholder="e.g Bitcoin"
          setSelectCoin={setSelectBCoin}
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
        <SelectedCoin selectACoin={selectACoin} selectBCoin={selectBCoin} />
      </div>
    </div>
  );
};
export default Homepage;
