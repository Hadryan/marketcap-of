import React, { useState, useEffect } from "react";
//styles
import "../styles/Donation.css";
import "../styles/CoinsList.css";
import "../styles/Coin.css";
//components
import CoinsList from "../components/CoinsList";
import DropdownSelected from "../components/DropdownSelected";
import Search from "../components/Search";
import SelectCoinInSearch from "../components/SelectedCoinInSearch";

const Donation = ({
  donateCoins,
  keyPress,
  setKeyPress,
  mouseMove,
  setMouseMove,
  selectACoin,
  selectDonationCoin,
  setSelectDonationCoin,
}) => {
  //states

  const [search, setSearch] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [nr, setNr] = useState(0);

  //to remove the selected donation coin from the drop down
  useEffect(() => {
    setFilteredCoins(donateCoins.filter((coin) => coin !== selectDonationCoin));
  }, [selectDonationCoin]);
  console.log(selectDonationCoin);
  return (
    <div className="donation-page-container">
      <div className="donation-container">
        <header>
          <h1 className="donation-title">Donate</h1>
          <p className="donation-description">
            Your contribution makes big difference. To be able to run this and
            add more coins I need your support. Who likes ads?
          </p>
        </header>
        <ul className="nav-donation">
          <li className="method">Method</li>
          <li className="info">Info</li>
          <li className="send">Send</li>
        </ul>
        <div className="donation-box box-method">
          <h3>Select donation method</h3>

          <DropdownSelected
            selectDonationCoin={selectDonationCoin}
            setShowDropDown={setShowDropDown}
            showDropDown={showDropDown}
          />
          {showDropDown ? (
            <CoinsList
              coins={filteredCoins}
              search={search}
              setSearch={setSearch}
              setSelectCoin={setSelectDonationCoin}
              setDisplay={setShowDropDown}
              display={showDropDown}
              setFilteredCoins={setFilteredCoins}
              setNr={setNr}
              nr={nr}
              keyPress={keyPress}
              setKeyPress={setKeyPress}
              mouseMove={mouseMove}
              donationList="donation-list"
              donationCoin="donation-coin"
            />
          ) : (
            ""
          )}
          {/* <form className="method-form" action="">
             <select name="cryptos" id="cryptos">
               {coinsSupported.length
                ? coinsSupported.map((coin) => {
                    return (
                      <option key={coin.id} value={coin.name}>
                        {coin.name} ({coin.symbol.toUpperCase()})
                      </option>
                    );
                  })
                : //else
                  "<option>Loading...</option>"}
            </select>
          </form>  */}
        </div>
        <div className="donation-box box-amount">
          <h3>Donation amount</h3>
        </div>
      </div>
    </div>
  );
};
export default Donation;
