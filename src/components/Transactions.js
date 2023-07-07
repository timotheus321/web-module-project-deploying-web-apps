// components/Transactions.js

import React from 'react';
import SingleTransaction from './SingleTransaction';

function Transactions({ transactions }) {
  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.map(transaction => <SingleTransaction key={transaction.id} transaction={transaction} />)}
    </div>
  );
}

export default Transactions;
