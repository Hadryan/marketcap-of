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
  const [coins, setCoins] = useState([]);

  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [displayFrom, setDisplayFrom] = useState(false);
  const [displayTo, setDisplayTo] = useState(false);
  const [selectFromCoin, setSelectFromCoin] = useState({});
  const [selectToCoin, setSelectToCoin] = useState({});

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const fromRef = useClickOutside(() => {
    setDisplayFrom(false);
  });
  const toRef = useClickOutside(() => {
    setDisplayTo(false);
  });

  return (
    <div className="homepage">
      <h1 className="title">
        Show the value of <span className="span-A">A</span> <br />
        with the market cap of
        <span className="span-B"> B</span>
      </h1>
      <div className="search-list-container" ref={fromRef}>
        <Search
          setSearch={setSearchFrom}
          search={searchFrom}
          searchName="A"
          setDisplay={setDisplayFrom}
          placeholder="e.g Ethereum"
        />
        {displayFrom ? (
          <CoinsList
            coins={coins}
            search={searchFrom}
            setSelectCoin={setSelectFromCoin}
            setDisplay={setDisplayFrom}
            setSearch={setSearchFrom}
          />
        ) : (
          ""
        )}
      </div>

      <div className="search-list-container" ref={toRef}>
        <Search
          setSearch={setSearchTo}
          search={searchTo}
          searchName="B"
          setDisplay={setDisplayTo}
          placeholder="e.g Bitcoin"
        />
        {displayTo ? (
          <CoinsList
            coins={coins}
            search={searchTo}
            setSelectCoin={setSelectToCoin}
            setDisplay={setDisplayTo}
            setSearch={setSearchTo}
          />
        ) : (
          ""
        )}
      </div>
      <div className="selectedCoin-div">
        <SelectedCoin
          selectFromCoin={selectFromCoin}
          selectToCoin={selectToCoin}
        />
      </div>
    </div>
  );
};
export default Homepage;
