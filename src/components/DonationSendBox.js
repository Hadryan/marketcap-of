import React, { useRef } from "react";
import "../styles/DonationSendBox.css";
//fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
const DonationSendBox = ({ selectDonationCoin, donationForm }) => {
  //ref for copying code
  const addressRef = useRef();

  const handleClick = () => {
    const copyText = addressRef.current.innerText;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", copyText);
  };

  return (
    <div className="donation-box box-send">
      <h3 className="qr-title">
        Send{" "}
        {donationForm.cryptoAmount.toFixed(
          selectDonationCoin.current_price > 1000 ? 7 : 3
        )}{" "}
        {selectDonationCoin.name} <br />
        to the address bellow
      </h3>
      {Object.keys(selectDonationCoin).length ? (
        <div className="address-container">
          <h3
            className="address"
            ref={addressRef}
            value={selectDonationCoin.donation.address}
          >
            {selectDonationCoin.donation.address}
          </h3>
          <FontAwesomeIcon
            className="fa-clone"
            icon={faClone}
            onClick={handleClick}
          />
        </div>
      ) : (
        "Loading..."
      )}
      {Object.keys(selectDonationCoin).length ? (
        <div className="qr-container">
          <h3 className="qr-title">or scan the QR-code</h3>
          <img
            className="qr-img"
            src={selectDonationCoin.donation.qr}
            alt="QR-code"
          />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default DonationSendBox;
