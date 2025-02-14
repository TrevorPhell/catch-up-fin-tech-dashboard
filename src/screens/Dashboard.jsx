import React, { useState } from 'react';
import BalanceOverview from '../components/BalanceOverview';
import RecentTransactions from '../components/RecentTransactions';
import ExpenseChart from '../components/ExpenseChart';
import ThemeToggle from '../components/ThemeToggle';
import TransferFundsForm from '../form/TransferFundsForm';

const Dashboard = () => {
    const [balance, setBalance] = useState(1000);
    const [transactions, setTransactions] = useState([
      { description: 'Groceries', amount: 50 },
      { description: 'Transport', amount: 20 },
      { description: 'Entertainment', amount: 100 },
    ]);
  
    const handleTransfer = ({ amount, recipient }) => {
      console.log('Transferring:', amount, 'to', recipient);
      // Update balance and transactions here
    };
  
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <ThemeToggle />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BalanceOverview balance={balance} className="md:col-span-2" />
            <ExpenseChart
              data={[
                { name: 'Food', value: 400 },
                { name: 'Transport', value: 300 },
                { name: 'Entertainment', value: 200 },
              ]}
            />
            <RecentTransactions transactions={transactions} />
          </div>
          <TransferFundsForm onSubmit={handleTransfer} />
        </div>
      </div>
    );
  };
  
export default Dashboard;
