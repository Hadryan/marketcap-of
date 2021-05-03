import React, { useState, useEffect } from "react";
//components
import DonationMethodBox from "../components/DonationMethodBox";
import DonationAmountBox from "../components/DonationAmountBox";
import DonationInfoBox from "../components/DonationInfoBox";
import DonationSendBoxIntruction from "../components/DonationSendBoxIntruction";
import DonationSendBox from "../components/DonationSendBox";
//import emailJs
import emailjs from "emailjs-com";
//route for going back page
import { Link } from "react-router-dom";

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
  mouseMove,
  setMouseMove,
  selectDonationCoin,
  setSelectDonationCoin,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [nr, setNr] = useState(0);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [cryptoDonateAmount, setCryptoDonateAmount] = useState(0);
  const [donationForm, setDonationForm] = useState({
    coinsymbol: "btc",
    amount: 5,
    cryptoAmount: 0,
    firstname: "",
    lastname: "",
    fromemail: "",
    message: "",
  });

  useEffect(() => {
    //to remove the selected donation coin from the drop down
    setFilteredCoins(donateCoins.filter((coin) => coin !== selectDonationCoin));
    //to change coinsymbol in form
    setDonationForm({
      ...donationForm,
      coinsymbol: selectDonationCoin.symbol,
    });
  }, [selectDonationCoin]);

  //handlers
  const handleMouseMove = () => {
    setMouseMove(true);
  };
  const handleClickContinue = (num) => {
    setCurrentPage(currentPage + num);
  };
  const handleSubmitForm = () => {
    emailjs
      .send(
        process.env.REACT_APP_KEY3,
        process.env.REACT_APP_KEY2,
        donationForm,
        process.env.REACT_APP_KEY1
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    alert("Thanks for donating!");
  };

  return (
    <div className="donation-page-container" onMouseOver={handleMouseMove}>
      <form className="donation-form">
        <div className="donation-container">
          <header>
            <h1 className="donation-title noSelect">Donate</h1>
            <p className="donation-description">
              Your contribution makes big difference. To be able to run this
              alone and add more coins I need your support. Who likes ads?
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
              setDonationForm={setDonationForm}
            />
            <DonationAmountBox
              donationCoin={selectDonationCoin}
              setCryptoDonateAmount={setCryptoDonateAmount}
              setDonationForm={setDonationForm}
              donationForm={donationForm}
              currentPage={currentPage}
            />
          </span>
          <span
            className={
              currentPage === 1
                ? "section-container"
                : "section-container hidden"
            }
          >
            <DonationInfoBox
              setDonationForm={setDonationForm}
              donationForm={donationForm}
            />
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
              cryptoDonateAmount={cryptoDonateAmount}
              setDonationForm={setDonationForm}
              donationForm={donationForm}
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
                  onClick={handleSubmitForm}
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
