// Wallet.js
import React from 'react';

function Wallet({usd, eth}) {
  return (
    <div>
      <h2>Wallet</h2>
      <p>USD: {usd}</p>
      <p>Ethereum: {eth}</p>
    </div>
  );
}

export default Wallet;
