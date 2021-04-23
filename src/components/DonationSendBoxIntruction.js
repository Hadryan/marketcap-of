import React from "react";
import "../styles/DonationSendBox.css";
import "../styles/Donation.css";
const DonationSendBoxIntruction = ({ selectDonationCoin }) => {
  return (
    <div className="donation-box box-send-intruction">
      <h3 className="qr-title">Go to your {selectDonationCoin.name} wallet</h3>
    </div>
  );
};
export default DonationSendBoxIntruction;
