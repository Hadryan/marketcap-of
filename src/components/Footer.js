import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import iconHand from "../img/hand.svg";
//pages
import Donation from "../pages/Donation";

//route for Donation page
import {
  Route,
  Link,
  BrowserRouter as Router,
  HashRouter,
  Switch,
} from "react-router-dom";
import Homepage from "../pages/Homepage";

const Footer = ({
  selectACoin,
  setNr,
  nr,
  keyPress,
  setKeyPress,
  mouseMove,
  setMouseMove,
  donateCoins,
  coins,
  selectDonationCoin,
  setSelectDonationCoin,
}) => {
  return (
    <Router>
      <footer className="footer">
        <hr />
        <div className="social-icon-row">
          <ul className="social-icons">
            <li>
              <a
                className="btn btn-twitter"
                href="https://twitter.com/MarketCapOf"
                target="_blank"
                rel="noreferrer"
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
                    Object.keys(donateCoins).length ? (
                      <img
                        className="coin-over-hand"
                        src={
                          // Bitcoin is set to default as supported coin
                          donateCoins.includes(selectACoin)
                            ? selectACoin.image
                            : donateCoins[0].image
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
            &copy; {new Date().getFullYear()} MarketCapOf. All Rights Reserved.
          </p>
        </div>
      </footer>
      <Switch>
        <Route exact path="/donation">
          <Donation
            selectNr={nr}
            setSelectNr={setNr}
            keyPress={keyPress}
            setKeyPress={setKeyPress}
            mouseMove={mouseMove}
            setMouseMove={setMouseMove}
            selectACoin={selectACoin}
            donateCoins={donateCoins}
            selectDonationCoin={selectDonationCoin}
            setSelectDonationCoin={setSelectDonationCoin}
          />
        </Route>
      </Switch>
    </Router>
  );
};
export default Footer;
