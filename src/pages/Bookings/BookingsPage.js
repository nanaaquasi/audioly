import React from 'react';

import styles from './Bookings.module.css';
import Card from '../../components/Card/Card';
import { pricing } from '../../mock';

const BookingsPage = () => {
  return (
    <>
      <section className={styles.Bookings}>
        <div className={styles.Container}>
          <div className={styles.Heading}>
            <h1>Your new audio content creation strategy starts here.</h1>
            <p>Simple pricing for everyone</p>
          </div>
          <div className={styles.PriceSection}>
            <div className={styles.PricesContainer}>
              {pricing.map((price) => {
                return (
                  <Card
                    title={price.title}
                    description={price.desc}
                    itemList={price.services}
                    price={price.price}
                    rate={price.billRate}
                    key={price.id}
                  />
                );
              })}
            </div>
            <div className={styles.PriceSectionFooter}>
              <p>
                <strong>Prices include</strong> online recording, editing,
                mastering, final check and delivery. For voice-over recordings:
                including synching the audio track to the video.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingsPage;
