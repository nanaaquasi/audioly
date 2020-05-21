import React from 'react';

import styles from './Bookings.module.css';
import Card from '../../components/Card/Card';
import { pricing } from '../../mock';
import BookingsModal from '../../components/Modal/BookingsModal';
import Layout from '../../layouts/Layout';

import { useToasts } from 'react-toast-notifications';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const BookingsPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { addToast } = useToasts();
  const history = useHistory();

  const isAuth = useSelector((state) => state.tokenID);

  function openModal() {
    if (isAuth) {
      setIsOpen(true);
    } else {
      addToast('You need to login to continue', {
        appearance: 'error',
      });

      history.push('/auth');
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
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
                    id={price.id}
                    title={price.title}
                    description={price.desc}
                    itemList={price.services}
                    price={price.price}
                    rate={price.billRate}
                    key={price.id}
                    onclick={openModal}
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
        <BookingsModal
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      </section>
    </Layout>
  );
};

export default BookingsPage;
