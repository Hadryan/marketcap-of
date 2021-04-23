import React from "react";
import "../styles/DonationInfoBox.css";
const DonationInfoBox = () => {
  return (
    <div className="donation-box box-info">
      <h3>Who are you?</h3>
      <div className="info-input-container">
        <label>
          <input className="info-checkbox" type="checkbox" />I want to be
          anonymous
        </label>
        <input
          className="info-input firstname"
          placeholder="First name"
          type="text"
          maxLength={20}
        />
        <input
          className="info-input lastname"
          placeholder="Last name"
          type="text"
          maxLength={20}
        />
        <input
          className="info-input email"
          placeholder="Email"
          type="email"
          maxLength={50}
        />
        <input
          className="info-input country"
          placeholder="Country"
          type="text"
          maxLength={20}
        />
        <textarea
          className="info-input textarea"
          placeholder="Enter a message..."
          maxLength={250}
        ></textarea>
      </div>
    </div>
  );
};
export default DonationInfoBox;
