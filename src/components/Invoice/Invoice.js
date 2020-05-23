import React from 'react';

import { INVOICE_DATA } from '../../mock';

import './Invoice.css';

const Invoice = () => {
  return (
    <div>
      <table>
        <thead>
          <th>Service</th>
          <th>Payment Type</th>
          <th>Amount</th>
          <th>Payment Date</th>
        </thead>
        <tbody>
          {INVOICE_DATA.map((data) => {
            return (
              <tr key={Math.random() + data}>
                <td>{data.service}</td>
                <td>{data.type}</td>
                <td>{data.amount}</td>
                <td>{data.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
