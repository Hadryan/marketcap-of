import React from "react";
//styles
import "../styles/Donation.css";

const Donation = () => {
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
        <div className="donation-method"></div>
      </div>
    </div>
  );
};
export default Donation;
