import React from 'react';

const Button = ({ children, onClick, className, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    danger: 'bg-red-500 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;