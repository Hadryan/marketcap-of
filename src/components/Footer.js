import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import iconHand from "../img/hand.svg";
//json
import supportedCoins from "../donation/supported-coins.json";

const Footer = ({ selectACoin, coins }) => {
  //to use the coins objects but only the ones that matches the name from my custom Json
  const coinsSupported = coins.filter((coin) => {
    const supported = !coin.name.includes(
      supportedCoins.filter((sup) => {
        return coin.name === sup.name;
      })
    );
    return supported;
  });
  return (
    <footer>
      <hr />
      <div className="social-icon-row">
        <ul className="social-icons">
          <li>
            <a
              className="btn twitter"
              href="https://twitter.com/MarketCapOf"
              target="_blank"
            >
              <FontAwesomeIcon className="fa twitter" icon={faTwitter} />
            </a>
          </li>
          <li>
            <button className="btn btn-hand">
              {Object.keys(coins).length ? (
                <img
                  className="coin-over-hand"
                  src={
                    coinsSupported.includes(selectACoin)
                      ? selectACoin.image
                      : coins[0].image
                  }
                  alt="coin"
                />
              ) : (
                ""
              )}
              <img className="fa icon-hand" src={iconHand} alt="hand" />
              <p className="donate-text">Donate</p>
            </button>
          </li>
          {/* <li>
            <a href="https://www.linkedin.com" target="_blank">
              <FontAwesomeIcon className="fa linkedin" icon={faLinkedin} />
            </a>
          </li> */}
        </ul>
      </div>
      <div className="text-row">
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} Emil Neander. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;