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
  const [selectInDropdownA, setSelectInDropdownA] = useState(filteredCoinsA[0]);
  const [selectInDropdownB, setSelectInDropdownB] = useState(filteredCoinsB[0]);
  const [selectACoin, setSelectACoin] = useState({});
  const [selectBCoin, setSelectBCoin] = useState({});

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(selectInDropdownA);
  const aRef = useClickOutside(() => {
    setDisplayAList(false);
  });
  const bRef = useClickOutside(() => {
    setDisplayBList(false);
  });

  return (
    <div className="homepage">
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
        />
        {displayAList ? (
          <CoinsList
            coins={coins}
            search={searchA}
            setSelectCoin={setSelectACoin}
            setDisplay={setDisplayAList}
            setSearch={setSearchA}
            setFilteredCoins={setFilteredCoinsA}
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
        />
        {displayBList ? (
          <CoinsList
            coins={coins}
            search={searchB}
            setSelectCoin={setSelectBCoin}
            setDisplay={setDisplayBList}
            setSearch={setSearchB}
            setFilteredCoins={setFilteredCoinsB}
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
