import React from 'react';

const BalanceOverview = ({ balance }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold">Balance Overview</h2>
      <p className="text-2xl">${balance}</p>
    </div>
  );
};

export default BalanceOverview;
