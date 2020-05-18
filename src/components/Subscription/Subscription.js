import React from 'react';

import styles from './Subscription.module.css';

const Subscription = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.SubscriptionImage}>
        <img src='https://cdn4.iconfinder.com/data/icons/flat-icon-set/2125/flat_icons-graficheria.it-05.png' />
      </div>
      <div className={styles.SubscriptionContent}>
        <h3>Audioly audio services weekly newsletter.</h3>
        <p>
          Subscribe to find out about new video clips, music tracks and video
          templates in your inbox every week. No spam, just pure creative juice.
        </p>
        <input
          type='text'
          placeholder='Your email'
          className={styles.EmailInput}
        />
      </div>
    </div>
  );
};

export default Subscription;
