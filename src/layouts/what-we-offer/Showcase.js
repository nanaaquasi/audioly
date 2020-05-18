import React from 'react';

import styles from './showcase.module.css';
import { SERVICES } from '../../mock';

const Showcase = () => {
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
                />
              );
            })}
          </div>
        </div>
      </div>
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
      <button>{buttonText}</button>
    </div>
  );
};

export default Showcase;
