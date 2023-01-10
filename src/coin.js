import { func } from "prop-types";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>}
      <br/>
      <input id="money" type="text" placeholder="your money(USD)"></input>
      <label htmlFor="money">change</label>
      <br/>
      <input id="change" type="text"></input>
      <label htmlFor="change"></label>
    </div>
  );
}

export default App;
