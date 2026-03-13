import axios from 'axios';

export async function fetchMarketData() {
  const us = await axios.get(`https://api.polygon.io/v1/indices?symbols=^GSPC,^DJI,^IXIC&apiKey=${process.env.POLYGON_KEY}`);
  const hk = await axios.get(`https://api.twelvedata.com/time_series?symbol=HSI,HSCEI&interval=1day&apikey=${process.env.TWELVEDATA_KEY}`);
  const china = await axios.get(`https://api.twelvedata.com/time_series?symbol=000300.SH,000001.SH&interval=1day&apikey=${process.env.TWELVEDATA_KEY}`);
  return { us: us.data, hk: hk.data, china: china.data };
}

export async function fetchAssets() {
  const assets = await axios.get(`https://api.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=GOLD,OIL,BTC,ETH&apikey=${process.env.ALPHA_KEY}`);
  return assets.data;
}

export async function fetchTopMovers() {
  const gainers = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?apiKey=${process.env.POLYGON_KEY}`);
  const losers = await axios.get(`https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/losers?apiKey=${process.env.POLYGON_KEY}`);
  return { gainers: gainers.data, losers: losers.data };
}

export async function fetchTreasury() {
  const curve = await axios.get(`https://api.alphavantage.co/query?function=TREASURY_YIELD&interval=daily&maturity=all&apikey=${process.env.ALPHA_KEY}`);
  return curve.data;
}

export async function fetchFutures() {
  const futures = await axios.get(`https://api.polygon.io/v1/marketdata/futures/quotes?apiKey=${process.env.POLYGON_KEY}`);
  const vix = await axios.get(`https://api.polygon.io/v1/indices/VIX/quotes?apiKey=${process.env.POLYGON_KEY}`);
  return { futures: futures.data, vix: vix.data };
}

export async function fetchCapitalFlow() {
  const northbound = await axios.get(`https://api.hkex.com.hk/northbound`);
  const southbound = await axios.get(`https://api.hkex.com.hk/southbound`);
  return { northbound: northbound.data, southbound: southbound.data };
}

export async function fetchSectorHeatmap() {
  const sectors = await axios.get(`https://financialmodelingprep.com/api/v3/sectors-performance?apikey=${process.env.FMP_KEY}`);
  return sectors.data;
}

export async function fetchNews() {
  const news = await axios.get(`https://newsapi.org/v2/everything?q=stock+market&sortBy=publishedAt&language=en&apiKey=${process.env.NEWSAPI_KEY}`);
  return news.data.articles;
}

export async function fetchMacro() {
  const events = await axios.get(`https://api.tradingeconomics.com/calendar?c=guest:guest`);
  return events.data;
}

export async function fetchAIBrief() {
  return `US stocks rose as tech shares led gains. Hong Kong advanced with strong southbound inflows. Treasury yields remained stable.`;
}