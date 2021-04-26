//supported coins JS
import supportedCoins from "./donation/supported-coins";

export const addDonationToData = (data) => {
  const newData = data.map((coin) => {
    coin["donation"] = {
      active: false,
      address: "",
      qr: "",
    };
    const dataAdded = supportedCoins.map((s) => {
      if (s.name === coin.name) {
        coin.donation.active = true;
        coin.donation.address = s.address;
        coin.donation.qr = s.qraddress;
      }
      return;
    });
    return dataAdded;
  });
  return newData;
};
export const addExchangeToData = (data) => {
  const newData = data.map((coin) => {
    coin["exchange"] = [];
  });
  return newData;
};
