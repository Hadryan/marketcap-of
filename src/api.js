import axios from "axios";

export const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

export const getCoinById = (id) => {
  return axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
    .then((res) => {
      return [res.data].map((item) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image.thumb,
          market_cap: item.market_data.market_cap.usd,
          current_price: item.market_data.current_price.usd,
          circulating_supply: item.market_data.circulating_supply,
          symbol: item.symbol,
        };
      });
    })
    .catch((error) => console.log(error));
};
