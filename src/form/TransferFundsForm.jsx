import React, { useState } from 'react';
import Button from '../components/reusable_components/Button';
import Card from '../components/reusable_components/Card';
import Input from '../components/reusable_components/Input';

const TransferFundsForm = ({ onSubmit, title = 'Transfer Funds', className }) => {
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      const newErrors = {};
      if (!recipient) newErrors.recipient = 'Recipient is required.';
      if (!amount) newErrors.amount = 'Amount is required.';
      if (amount && isNaN(amount)) newErrors.amount = 'Amount must be a number.';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        onSubmit && onSubmit({ amount, recipient });
      }
    };
  
    return (
      <Card title={title} className={className}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            label="Recipient"
            error={errors.recipient}
          />
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            label="Amount"
            error={errors.amount}
          />
          <Button type="submit" variant="primary" className="w-full">
            Transfer
          </Button>
        </form>
      </Card>
    );
  };
  
export default TransferFundsForm;
