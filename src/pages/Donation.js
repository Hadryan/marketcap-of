import React, { useState, useEffect } from "react";
//components
import DonationMethodBox from "../components/DonationMethodBox";
import DonationAmountBox from "../components/DonationAmountBox";
//hook
import useClickOutside from "../hooks/useClickOutside";
//styles
import "../styles/Donation.css";

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

  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [nr, setNr] = useState(0);
  const [search, setSearch] = useState("");

  //to remove the selected donation coin from the drop down
  useEffect(() => {
    setFilteredCoins(donateCoins.filter((coin) => coin !== selectDonationCoin));
  }, [selectDonationCoin]);
  const dropdownRef = useClickOutside(() => {
    setShowDropDown(false);
  });
  //handlers
  //handler
  const handleMouseMove = () => {
    setMouseMove(true);
  };
  return (
    <div className="donation-page-container" onMouseOver={handleMouseMove}>
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
        <DonationMethodBox
          filteredCoins={filteredCoins}
          setSelectDonationCoin={setSelectDonationCoin}
          selectDonationCoin={selectDonationCoin}
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
          setFilteredCoins={setFilteredCoins}
          setNr={setNr}
          nr={nr}
          mouseMove={mouseMove}
          refProp={dropdownRef}
          setSearch={setSearch}
          search={search}
        />
        <DonationAmountBox price={selectDonationCoin.current_price} />
      </div>
    </div>
  );
};
export default Donation;
