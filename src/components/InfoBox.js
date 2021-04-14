import React, { useRef } from "react";
import "../styles/InfoBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const InfoBox = ({ selectACoin }) => {
  const a = selectACoin;

  //ref to the content
  const ref = useRef();
  //func
  const makeVisible = (bool) => {
    ref.current.className = bool ? "content visible" : "content";
  };
  //handlers
  const handleClick = () => {
    makeVisible(true);
  };
  const handleMouseOver = () => {
    makeVisible(true);
  };
  const handleMouseLeave = () => {
    makeVisible(false);
  };

  return (
    <div className="info-container">
      <FontAwesomeIcon
        className="question-icon"
        icon={faQuestionCircle}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
      <div className="content" ref={ref}>
        {/* <FontAwesomeIcon className="fa-times" icon={faTimes} /> */}
        <p>
          The market cap is equal to the price of a coin/share multiplied by
          it's total number of coins in circulation. <br /> For example {a.name}
          : ≈${a.current_price.toLocaleString()} *{" "}
          {a.circulating_supply.toLocaleString()} = $
          {a.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
export default InfoBox;
