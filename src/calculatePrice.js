export const calculatePrice = (a, b) => {
  const marketcapDif = b.market_cap / a.market_cap;
  const price = a.current_price * marketcapDif;
  return price;
};
export const calculatePercentage = (newPrice, oldPrice) => {
  const difference = newPrice - oldPrice;
  const percentage = (difference / oldPrice) * 100;
  return percentage;
};
