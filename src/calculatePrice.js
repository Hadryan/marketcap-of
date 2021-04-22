//get price with market cap of
export const calculatePrice = (a, b) => {
  const marketcapDif = b.market_cap / a.market_cap;
  const price = a.current_price * marketcapDif;
  return price;
};
//get the percentage rise
export const calculatePercentage = (newPrice, oldPrice) => {
  const difference = newPrice - oldPrice;
  const percentage = (difference / oldPrice) * 100;
  return percentage;
};

//get the amount of coins with specific set fiat
export const fiatToCrypto = (fiatAmount, coinPrice) => {
  return fiatAmount / coinPrice;
};
