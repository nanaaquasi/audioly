import React from 'react';

import styles from './Table.module.css';

const Table = (props) => {
  return (
    <div className={styles.Table}>
      <div className={styles.TableHeading}>
        {props.headings.map((heading) => (
          <div key={heading}>
            <h4>{heading}</h4>
          </div>
        ))}
      </div>
      {props.children}
    </div>
  );
};

export const PaymentsTable = (props) => {
  return (
    <div className={styles.PaymentsTable}>
      <div className={styles.TableHeading}>
        <div></div>
        {props.headings.map((heading) => (
          <div key={heading}>
            <h4>{heading}</h4>
          </div>
        ))}
      </div>
      {props.children}
    </div>
  );
};

export default Table;
