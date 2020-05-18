import React from 'react';
import Subscription from '../../components/Subscription/Subscription';

import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.Container}>
      <div className={styles.SubscriptionBox}>
        <h1 className={styles.SubscriptionHeading}>
          Subscribe To Our NewsLetter.
        </h1>
        <Subscription />
      </div>
    </section>
  );
};

export default Newsletter;
