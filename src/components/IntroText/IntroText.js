import React from 'react';

import styles from './Introtext.module.css';

const IntroText = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.IntroText}>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default IntroText;
