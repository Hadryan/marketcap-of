import React from "react";
//components
import CoinsList from "../components/CoinsList";
import DropdownSelected from "../components/DropdownSelected";
//styles
import "../styles/Donation.css";
import "../styles/CoinsList.css";
import "../styles/Coin.css";

const DonationMethodBox = ({
  mouseMove,
  selectDonationCoin,
  setSelectDonationCoin,
  filteredCoins,
  setShowDropDown,
  showDropDown,
  setNr,
  nr,
  setFilteredCoins,
  refProp,
  setSearch,
  search,
}) => {
  return (
    <div className="donation-box box-method">
      <h3>Select donation method</h3>

      <div className="donation-list-container" ref={refProp}>
        <DropdownSelected
          selectDonationCoin={selectDonationCoin}
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
          setNr={setNr}
        />
        {showDropDown ? (
          <CoinsList
            coins={filteredCoins}
            setSelectCoin={setSelectDonationCoin}
            setDisplay={setShowDropDown}
            display={showDropDown}
            setFilteredCoins={setFilteredCoins}
            setNr={setNr}
            nr={nr}
            mouseMove={mouseMove}
            donationList="donation-list"
            donationCoinStyle="donation-coin"
            selectedDonationCoinStyle="selected-donation-coin"
            setSearch={setSearch}
            search={search}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default DonationMethodBox;
