import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import iconHand from "../img/hand.svg";
//pages
import Donation from "../pages/Donation";
//supported coins JS
import supportedCoins from "../donation/supported-coins";
//route for Donation page
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Footer = ({ selectACoin, selectBCoin, coins }) => {
  //to use the coins objects but only the ones that matches the name from my custom Json
  const coinsSupported = coins.filter((coin) => {
    const supported = !coin.name.includes(
      supportedCoins.filter((sup) => {
        return coin.name === sup.name;
      })
    );
    return supported;
  });

  const coinAreSelected =
    Object.keys(selectACoin).length && Object.keys(selectBCoin).length;
  return (
    <Router>
      <footer className={coinAreSelected ? "footer footer-selected" : "footer"}>
        <hr />
        <div className="social-icon-row">
          <ul className="social-icons">
            <li>
              <a
                className="btn btn-twitter"
                href="https://twitter.com/MarketCapOf"
                target="_blank"
              >
                <FontAwesomeIcon className="fa twitter" icon={faTwitter} />
              </a>
            </li>
            <li>
              {/* Button to Donation page */}
              <Link to="/donation" className="link">
                <button className="btn btn-hand">
                  {
                    //only write out image if coins exists
                    Object.keys(coins).length ? (
                      <img
                        className="coin-over-hand"
                        src={
                          // Bitcoin is set to default as supported coin
                          coinsSupported.includes(selectACoin)
                            ? selectACoin.image
                            : coins[0].image
                        }
                        alt="coin"
                      />
                    ) : (
                      ""
                    )
                  }
                  <img className="fa icon-hand" src={iconHand} alt="hand" />
                  <p className="donate-text">Donate</p>
                </button>
              </Link>
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
      <Route component={Donation} exact path="/donation" />
    </Router>
  );
};
export default Footer;
