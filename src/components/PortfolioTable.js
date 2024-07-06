import React from 'react';

const PortfolioTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>QTY</th>
          <th>Amount</th>
          <th>Proportion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tech & Growth</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Index & Dividend Growth</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>CASH</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default PortfolioTable;
