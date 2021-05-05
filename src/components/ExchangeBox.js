import React from "react";

const ExchangeBox = ({ name, logo, description, link }) => {
  return (
    <div className="box-exchange">
      <img src={logo} alt={name} className={"exchange-logo " + name} />
      <h3 className="exchange-description">{description}</h3>
      <a className="exchange-link" href={link} target="_blank" rel="nofollow">
        <button className="exchange-btn">Let's go!</button>
      </a>
    </div>
  );
};
export default ExchangeBox;
