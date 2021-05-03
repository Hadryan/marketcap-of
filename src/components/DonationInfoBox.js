import React from "react";
import "../styles/DonationInfoBox.css";
const DonationInfoBox = ({ donationForm, setDonationForm }) => {
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
          name="firstname"
          type="text"
          maxLength={20}
          onChange={(e) => {
            setDonationForm({ ...donationForm, firstname: e.target.value });
          }}
        />
        <input
          className="info-input lastname"
          placeholder="Last name"
          name="lastname"
          type="text"
          maxLength={20}
          onChange={(e) => {
            setDonationForm({ ...donationForm, lastname: e.target.value });
          }}
        />
        <input
          className="info-input email"
          placeholder="Email"
          type="text"
          name="fromemail"
          maxLength={50}
          onChange={(e) => {
            setDonationForm({ ...donationForm, fromemail: e.target.value });
          }}
        />
        <input
          className="info-input country"
          placeholder="Country"
          type="text"
          name="country"
          maxLength={20}
          onChange={(e) => {
            setDonationForm({ ...donationForm, country: e.target.value });
          }}
        />
        <textarea
          className="info-input textarea"
          placeholder="Enter a message..."
          name="message"
          maxLength={250}
          onChange={(e) => {
            setDonationForm({ ...donationForm, message: e.target.value });
          }}
        ></textarea>
      </div>
    </div>
  );
};
export default DonationInfoBox;
