

// App.js
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Wallet from './components/Wallet';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Transactions from './components/Transactions';

function App() {
  const [usd, setUsd] = useState(10000);
  const [eth, setEth] = useState(10);
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="App">
      <Header />
      <Wallet usd={usd} eth={eth} />
      <Buy usd={usd} setUsd={setUsd} eth={eth} setEth={setEth} setTransactions={setTransactions} />
      <Sell usd={usd} setUsd={setUsd} eth={eth} setEth={setEth} setTransactions={setTransactions} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
