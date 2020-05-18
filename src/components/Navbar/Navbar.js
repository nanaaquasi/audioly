import React from 'react';
import { navItems } from '../../mock';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <nav>
        <div className={styles.Logo}>
          <Link to='/'>
            <h1>audioly.</h1>
          </Link>
        </div>
        <ul>
          {navItems.map((item) => {
            return (
              <Link to={item.link} className={styles.NavItem}>
                {item.title}
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
