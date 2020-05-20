import React from 'react';

import styles from './showcase.module.css';
import { SERVICES } from '../../mock';

import { useToasts } from 'react-toast-notifications';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import BookingsModal from '../../components/Modal/BookingsModal';

const Showcase = () => {
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
    <section className={styles.Showcase}>
      <div className={styles.Container}>
        <div className={styles.ShowcaseHeading}>
          <h2>Our Services</h2>
        </div>
        <div className={styles.ShowcaseContent}>
          <h3>See How Our Client Works With Us</h3>
          <div className={styles.ServiceContainer}>
            {SERVICES.map((service) => {
              return (
                <ServiceTile
                  imagePath={service.imagePath}
                  title={service.title}
                  key={service.id}
                  body={service.body}
                  buttonText={service.buttonText}
                  onclick={openModal}
                />
              );
            })}
          </div>
        </div>
      </div>
      <BookingsModal
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </section>
  );
};

const ServiceTile = (props) => {
  const { imagePath, title, body, buttonText } = props;

  return (
    <div className={styles.Service}>
      <div className={styles.ServiceImage}>
        <img src={imagePath}></img>
      </div>
      <div className={styles.ServiceHeading}>
        <h3>{title}</h3>
      </div>
      <div className={styles.ServiceBody}>
        <p>{body}</p>
      </div>
      <button onClick={props.onclick}>{buttonText}</button>
    </div>
  );
};

export default Showcase;
