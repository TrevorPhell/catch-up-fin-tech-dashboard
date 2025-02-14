import React from 'react';
import Table from './reusable_components/Table';

const RecentTransactions = ({ transactions }) => {
  const headers = ['Description', 'Amount'];
  const rows = transactions.map((t) => [t.description, `$${t.amount}`]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <Table headers={headers} rows={rows} />
    </div>
  );
};

export default RecentTransactions;