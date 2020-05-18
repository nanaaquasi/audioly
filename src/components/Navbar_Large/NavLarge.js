import React from 'react';
import styles from './NavLarge.module.css';

const NavLarge = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.SectionTitle}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default NavLarge;
