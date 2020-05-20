import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
  console.log(props);

  let cardStyles;

  if (props.title !== 'Premium') {
    cardStyles = styles.Card;
  } else {
    cardStyles = styles.PremiumCard;
  }

  return (
    <div className={cardStyles}>
      <div className={styles.CardHeader}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.CardBody}>
        <div className={styles.PriceDetail}>
          <h2>{props.price}</h2>
          <p>{props.rate}</p>
        </div>

        <ul>
          {props.itemList.map((list) => {
            return (
              <li className={styles.CardDetail} key={Math.random() + list}>
                {list}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.CardFooter}>
        <button onClick={props.onclick}>Get Started</button>
      </div>
    </div>
  );
};

export default Card;
