import React from 'react';

import styles from './Client.module.css';
import { clientLogos } from '../../mock';

const ClientSection = () => {
  return (
    <div className={styles.Container}>
      <h1>Our Partners</h1>
      <div className={styles.ClientSection}>
        {clientLogos.map((logo) => (
          <div className={styles.ClientLogo}>
            <img src={logo.assetName} alt={logo.id} key={logo.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
