import React from 'react';

const Table = ({ headers, rows, className }) => {
  return (
    <table className={`w-full ${className}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="text-left p-2 border-b">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="p-2 border-b">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
