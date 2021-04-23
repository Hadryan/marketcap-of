import React, { useState, useEffect } from "react";
//components
import DonationMethodBox from "../components/DonationMethodBox";
import DonationAmountBox from "../components/DonationAmountBox";
import DonationInfoBox from "../components/DonationInfoBox";
import DonationSendBoxIntruction from "../components/DonationSendBoxIntruction";
import DonationSendBox from "../components/DonationSendBox";
//route for going back page
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

//styles
import "../styles/Donation.css";
//fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

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
  const [currentPage, setCurrentPage] = useState(0);
  const [donationAmount, setDonationAmount] = useState(5);
  const [cryptoDonateAmount, setCryptoDonateAmount] = useState(0);

  //to remove the selected donation coin from the drop down
  useEffect(() => {
    setFilteredCoins(donateCoins.filter((coin) => coin !== selectDonationCoin));
  }, [selectDonationCoin]);

  //handlers
  const handleMouseMove = () => {
    setMouseMove(true);
  };
  const handleClickContinue = (num) => {
    setCurrentPage(currentPage + num);
  };
  return (
    <div className="donation-page-container" onMouseOver={handleMouseMove}>
      <form action="">
        <div className="donation-container">
          <header>
            <h1 className="donation-title noSelect">Donate</h1>
            <p className="donation-description">
              Your contribution makes big difference. To be able to run this and
              add more coins I need your support. Who likes ads?
            </p>
          </header>
          <ul className="nav-donation noSelect">
            <li className={`method ${currentPage === 0 ? "current-nav" : ""}`}>
              Method
            </li>
            <li className={`info ${currentPage === 1 ? "current-nav" : ""}`}>
              Info
            </li>
            <li className={`send ${currentPage === 2 ? "current-nav" : ""}`}>
              Send
            </li>
          </ul>
          <span
            className={
              currentPage === 0
                ? "section-container"
                : "section-container hidden"
            }
          >
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
              setSearch={setSearch}
              search={search}
            />
            <DonationAmountBox
              donationCoin={selectDonationCoin}
              donationAmount={donationAmount}
              setDonationAmount={setDonationAmount}
              setCryptoDonateAmount={setCryptoDonateAmount}
            />
          </span>
          <span
            className={
              currentPage === 1
                ? "section-container"
                : "section-container hidden"
            }
          >
            <DonationInfoBox />
          </span>
          <span
            className={
              currentPage === 2
                ? "section-container"
                : "section-container hidden"
            }
          >
            <DonationSendBoxIntruction
              selectDonationCoin={selectDonationCoin}
            />
            <DonationSendBox
              selectDonationCoin={selectDonationCoin}
              donationAmount={donationAmount}
              cryptoDonateAmount={cryptoDonateAmount}
            />
          </span>
          <div className="button-row">
            {currentPage >= 1 ? (
              <button
                type="button"
                className="navigate-btn back-btn noSelect"
                onClick={() => handleClickContinue(-1)}
              >
                <FontAwesomeIcon
                  className="continue-arrow left noSelect"
                  icon={faChevronLeft}
                />
                <h2 className="noSelect">Back</h2>
              </button>
            ) : (
              ""
            )}
            {currentPage <= 1 ? (
              <button
                type="button"
                className="navigate-btn continue-btn noSelect"
                onClick={() => handleClickContinue(1)}
              >
                <FontAwesomeIcon
                  className="continue-arrow right noSelect"
                  icon={faChevronRight}
                />
                <h2 className="noSelect">Continue</h2>
              </button>
            ) : (
              ""
            )}
            {currentPage === 2 ? (
              <Link to="/" className="link-tohome">
                <button
                  type="button"
                  className="navigate-btn done-btn noSelect"
                  // onSubmit={() => handleClickContinue(1)}
                  onClick={() => {
                    alert("Thanks for donating!");
                  }}
                >
                  <FontAwesomeIcon
                    className="continue-arrow right-done noSelect"
                    icon={faCheck}
                  />
                  <h2 className="noSelect">Done</h2>
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default Donation;
