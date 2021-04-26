import React, { useState, useRef, useEffect } from "react";
//styles
import "../styles/Donation.css";
import "../styles/DonationAmountBox.css";
//calculate
import { fiatToCrypto } from "../calculatePrice";

const DonationAmountBox = ({
  donationCoin,
  donationAmount,
  setDonationAmount,
  setCryptoDonateAmount,
}) => {
  const [inputAmount, setInputAmount] = useState(0);

  //fiat to crypto
  const amountCrypto = fiatToCrypto(donationAmount, donationCoin.current_price);
  //useEffect
  useEffect(() => {
    setCryptoDonateAmount(amountCrypto);
  }, [donationAmount]);
  useEffect(() => {
    setCryptoDonateAmount(amountCrypto);
  }, [donationCoin]);
  //handlers
  const handleClick = (e) => {
    if (e.target.className === "radio radio-enter") {
      enterInputRef.current.style.zIndex = 1;
      enterInputRef.current.focus();
      setDonationAmount(e.target.value);
    } else {
      enterInputRef.current.style.zIndex = 0;
      enterInputRef.current.style.backgroundColor = "transparent";
      enterInputRef.current.value = "";
      setInputAmount(0);
      setDonationAmount(e.target.value);
    }
  };
  const handleChange = (e) => {
    setDonationAmount(e.target.value);
    setInputAmount(e.target.value);
  };
  const handleBlur = (e) => {
    enterInputRef.current.style.zIndex = 0;
    if (!e.target.value) {
      enterInputRef.current.style.backgroundColor = "transparent";
    }
  };
  const handleFocus = () => {
    enterInputRef.current.style.backgroundColor = "#7b37da";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //refs
  const enterInputRef = useRef();
  return (
    <div className="donation-box box-amount">
      <h3>Donation amount</h3>
      <div className="amount-grid">
        <div className="amount one">
          <input
            type="radio"
            name="radio"
            className="radio"
            defaultChecked="true"
            value={5}
            onClick={handleClick}
          />
          <div className="radio-style"></div>
          <h2>$5</h2>
        </div>
        <div className="amount two">
          <input
            type="radio"
            name="radio"
            className="radio"
            value={10}
            onClick={handleClick}
          />
          <div className="radio-style"></div>
          <h2>$10</h2>
        </div>
        <div className="amount three">
          <input
            type="radio"
            name="radio"
            className="radio"
            value={25}
            onClick={handleClick}
          />
          <div className="radio-style"></div>
          <h2>$25</h2>
        </div>
        <div className="amount four">
          <input
            type="radio"
            name="radio"
            className="radio"
            value={50}
            onClick={handleClick}
          />
          <div className="radio-style"></div>
          <h2>$50</h2>
        </div>
        <div className="amount enter">
          <input
            type="radio"
            name="radio"
            className="radio radio-enter"
            value={inputAmount}
            onClick={handleClick}
          />
          <input
            ref={enterInputRef}
            type="number"
            placeholder="Enter other amount"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onSubmit={handleSubmit}
          />
          <h2 className="usd-sign noSelect">$</h2>
        </div>
        {donationAmount > 0 ? (
          <div className="amount result">
            {Object.keys(donationCoin).length ? (
              <h2>
                ≈ {/* //if price is higher than 1000 then set more decimals */}
                {amountCrypto.toFixed(
                  donationCoin.current_price > 1000 < 3 ? 7 : 3
                )}{" "}
                {donationCoin.symbol.toUpperCase()}
              </h2>
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default DonationAmountBox;
