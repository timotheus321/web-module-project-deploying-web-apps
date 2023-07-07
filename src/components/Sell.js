
// Sell component
import React, { useState } from 'react';

function Sell({ usd, setUsd, eth, setEth, setTransactions }) {
  const [amount, setAmount] = useState(0);
  const currentPrice = 2000;
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const amountNumber = Number(amount);
    console.log('Selling ETH:', amountNumber, 'ETH:', eth);
    if (amountNumber > eth) {
      console.log("Not enough ETH to sell");
      alert("You don't have enough Ethereum to sell this amount");
      return;
    }
    setUsd(usd + amountNumber * currentPrice);
    setEth(eth - amountNumber);
    
    setTransactions(prevTransactions => [
      ...prevTransactions,
      {
        id: Date.now(),
        type: 'sell',
        amount: amountNumber,
        date: new Date().toLocaleString()
      }
    ]);
  };

  return (
    <div>
      <h2>Sell Ethereum</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <button type="submit">Sell</button>
      </form>
    </div>
  );
}

export default Sell;
