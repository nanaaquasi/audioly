import React from 'react';

import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { navItems } from '../../mock';
import { Element } from 'react-scroll';

import inputStyles from '../../components/Subscription/Subscription.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterNav}>
        <div className={styles.Logo}>
          <h1>audioly.</h1>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <Link to={item.link} className={styles.NavItem} key={item.title}>
                {item.title}
              </Link>
            ))}
          </ul>
          <h3>Copyright &copy; 2020, Audioly.</h3>
        </nav>
      </div>
      <Element name='contact' className={styles.Contact}>
        <div className={styles.Contact}>
          <h3>Contact Us</h3>
          <form>
            <input
              className={styles.Input}
              type='text'
              placeholder='Fullname'></input>
            <input
              className={styles.Input}
              type='text'
              placeholder='Email Address'></input>
            <textarea className={styles.Input}></textarea>
            <button className={styles.Button}>Submit</button>
          </form>
        </div>
      </Element>
    </footer>
  );
};

export default Footer;
