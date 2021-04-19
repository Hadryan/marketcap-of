import btc from "./img/Bitcoin-qr.PNG";
import eth from "./img/Ethereum-qr.PNG";
import usdt from "./img/USDT-qr.PNG";
import xrp from "./img/XRP-qr.PNG";
import bnb from "./img/BinanceCoin-qr.PNG";
import ada from "./img/Cardano-qr.PNG";
import dot from "./img/Polkadot-qr.PNG";
import doge from "./img/DogeCoin-qr.PNG";
import ltc from "./img/LiteCoin-qr.PNG";
import uni from "./img/Uniswap-qr.PNG";
import link from "./img/ChainLink-qr.PNG";
import bch from "./img/BitcoinCash-qr.PNG";
import xlm from "./img/Stellar-qr.PNG";
import vet from "./img/VeChain-qr.PNG";
import vtho from "./img/VeThor-qr.PNG";
import trx from "./img/Tron-qr.PNG";
import xmr from "./img/Monero-qr.PNG";
import neo from "./img/NEO-qr.PNG";
import storj from "./img/StorJ-qr.PNG";

const supportedCoins = [
  {
    name: "Bitcoin",
    address: "bc1qfww2zzhu8exhlvch2gl86jxgppzh8mws3xvq6r",
    network: "Bitcoin(BTC)",
    qraddress: btc,
  },
  {
    name: "Ethereum",
    address: "0x09f508d9594b77eb24B78485C90bcf8E06152D4E",
    network: "ERC20",
    qraddress: eth,
  },
  {
    name: "USDT",
    address: "0x09f508d9594b77eb24B78485C90bcf8E06152D4E",
    network: "ERC20",
    qraddress: usdt,
  },
  {
    name: "XRP",
    address: "rD1ztrBQgxAE6uqurFmtAFoBsfYaRVf3U7",
    network: "XRP",
    qraddress: xrp,
  },
  {
    name: "Binance Coin",
    address: "bnb13wd2zh4qu9e733pmrmxn7hn6qw6cyudkx7mwaz",
    network: "BEP2",
    qraddress: bnb,
  },
  {
    name: "Cardano",
    address:
      "addr1q9dtjeyy7ehrx6qnql3r595r8rpnz6c9w6q4vn3u7ceh9c66h9jgfanwxd5pxplz8gtgxwxrx94s2a5p2e8rea3nwt3suf4k0h",
    network: "Cardano",
    qraddress: ada,
  },
  {
    name: "Polkadot",
    address: "13hPqLoBsWZuCFzbTFrGRKPuyJFVvPVBhhGgqsHgrmzgKjTa",
    network: "DOT",
    qraddress: dot,
  },
  {
    name: "Dogecoin",
    address: "DHmAVkaywYVn1SBx9CPbcjvqfxzQ9mkxPP",
    network: "dogecoin",
    qraddress: doge,
  },
  {
    name: "Litecoin",
    address: "LaEciN4patnFBwYaXS4j9wLXNQhiU6DH2a",
    network: "LTC",
    qraddress: ltc,
  },
  {
    name: "Uniswap",
    address: "0x09f508d9594b77eb24B78485C90bcf8E06152D4E",
    network: "ERC20",
    qraddress: uni,
  },
  {
    name: "Chainlink",
    address: "0x09f508d9594b77eb24B78485C90bcf8E06152D4E",
    network: "ERC20",
    qraddress: link,
  },
  {
    name: "Bitcoin Cash",
    address: "qrlffrnspw6hj6vwst60wkwvx73aqaugnczwvrsqem",
    network: "BCH",
    qraddress: bch,
  },
  {
    name: "Stellar",
    address: "GCFBS4XO2MEJ6XZTGBODLZLL5JXYG5YWQTTYKQZ2APBYGFG5FDQCTN77",
    network: "Stellar",
    qraddress: xlm,
  },

  {
    name: "VeChain",
    address: "0x0bAF4E979de04B6ab027D1B0c3cCb381128f0Ddd",
    network: "Mainnet",
    qraddress: vet,
  },
  {
    name: "VeThor Token",
    address: "0x0bAF4E979de04B6ab027D1B0c3cCb381128f0Ddd",
    network: "Mainnet",
    qraddress: vtho,
  },
  {
    name: "TRON",
    address: "TX7kMZWpZ6zUCijEGT7TqVaCwn8yiECvh8",
    network: "TRC20",
    qraddress: trx,
  },
  {
    name: "Monero",
    address:
      "488eA55HEx7baqbVnAzj5z7G1LniexJvNMADdsdzFZX97mtVb9Vw6QU6bwNpAZpuQcKH8N1SefavdZtcR5Jm7jKcG6JqNiH",
    network: "Mainnet",
    qraddress: xmr,
  },
  {
    name: "NEO",
    address: "Adva3Dak53KhTcHCowr43oahJkgtVeeWtT",
    network: "Mainnet",
    qraddress: neo,
  },
  {
    name: "Storj",
    address: "0x09f508d9594b77eb24B78485C90bcf8E06152D4E",
    network: "Mainnet",
    qraddress: storj,
  },
];
export default supportedCoins;
