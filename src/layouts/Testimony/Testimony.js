import React from 'react';

import styles from './Testimony.module.css';
import { testimony } from '../../mock';

const Testimony = () => {
  return (
    <div>
      <section className={styles.Testimony}>
        <div className={styles.Container}>
          <div className={styles.TestimonyHeading}>
            <h2>Real Experiences</h2>
          </div>
          <div className={styles.TestimonyContent}>
            <h3>Here is what our client say about us</h3>
            <div className={styles.TestimonyContainer}>
              <div className={styles.TestimonyImage}>
                <img src={testimony.imagePath} />
              </div>
              <div className={styles.TestimonyBody}>
                <span className={styles.Quotes}>&#8220;</span>
                <p>{testimony.body}</p>
                <span className={styles.Quotes}>&#8221;</span>
              </div>
              <h4>- {testimony.author} - </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
