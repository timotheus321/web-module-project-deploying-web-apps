// components/SingleTransaction.js

import React from 'react';

function SingleTransaction({ transaction }) {
  return (
    <div>
      <p>Transaction Type: {transaction.type}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Date: {transaction.date}</p>
    </div>
  );
}

export default SingleTransaction;
