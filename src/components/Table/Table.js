import React from 'react';

import styles from './Table.module.css';

const Table = (props) => {
  return (
    <div className={styles.Table}>
      <div className={styles.TableHeading}>
        <div className={styles.project}>
          <h4>Project</h4>
        </div>
        <div className={styles.audio}>
          <h4>Audio File</h4>
        </div>

        <div className={styles.date}>
          <h4>Date added</h4>
        </div>
        <div className={styles.status}>
          <h4>Status</h4>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Table;
