import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import styles from './DashNav.module.css';
import { clientDashboardLinks } from '../../mock';

const DashboardNav = (props) => {
  const match = useRouteMatch();
  return (
    <div className={styles.MainNav}>
      {/* <Logo /> */}
      <div className={styles.Logo}>
        <h1>audioly.</h1>
      </div>

      <div className={styles.NavLinks}>
        <Link to='/' className={styles.NavItem}>
          Home
        </Link>
        {clientDashboardLinks.map((item) => {
          return (
            <Link
              to={`${match.url}/${item.link}`}
              className={styles.NavItem}
              key={item.id}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className={styles.ProfileNav}>
        <div>Notifs</div>
        <div>Profile Image</div>
      </div>
    </div>
  );
};

export default DashboardNav;
