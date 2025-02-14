import React from 'react';

const Card = ({ title, children, className }) => {
  return (
    <div className={`p-4 bg-white shadow rounded-lg ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;