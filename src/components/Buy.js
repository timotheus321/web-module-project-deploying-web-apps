// Buy component
import React, { useState } from 'react'; 

function Buy({ usd, setUsd, eth, setEth, setTransactions }) { 
  const [amount, setAmount] = useState(0); 
  const currentPrice = 2000; 

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    const cost = amount * currentPrice;
    console.log('Buying ETH:', amount, 'Cost:', cost, 'USD:', usd);

    if (usd < cost) { 
      console.log("Not enough funds to buy");
      alert("You don't have enough funds");
      return;
    }
    
    setUsd(usd - cost); 
    setEth(eth + Number(amount));

    setTransactions(prevTransactions => [
      ...prevTransactions, 
      {
        id: Date.now(), 
        type: 'buy', 
        amount, 
        date: new Date().toLocaleString()
      }
    ]);
  };

  return (
    <div>
      <h2>Buy Ethereum</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
        <button type="submit">Buy</button>
      </form>
    </div>
  );
}

export default Buy;
