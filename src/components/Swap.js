import React from "react";
//styles
import "../styles/Swap.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

const Swap = ({ setSelectACoin, setSelectBCoin, selectACoin, selectBCoin }) => {
  const handleClick = () => {
    setSelectACoin(selectBCoin);
    setSelectBCoin(selectACoin);
  };
  return (
    <div className="swap">
      <FontAwesomeIcon
        className="icon faExchangeAlt"
        icon={faExchangeAlt}
        onClick={handleClick}
      />
    </div>
  );
};

export default Swap;
