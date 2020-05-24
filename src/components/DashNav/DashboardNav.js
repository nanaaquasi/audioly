import React from 'react';
import { Link, useRouteMatch, NavLink } from 'react-router-dom';

import styles from './DashNav.module.css';
import { clientDashboardLinks } from '../../mock';
import userImage from '../../assets/user.jpg';
import notifIcon from '../../assets/notification.svg';

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
        <NavLink
          to={props.match.url}
          className={styles.NavItem}
          activeClassName={styles.ActiveNav}>
          Dashboard
        </NavLink>
        {props.links.map((item) => {
          return (
            <NavLink
              to={`${props.match.url}/${item.link}`}
              className={styles.NavItem}
              activeClassName={styles.ActiveNav}
              key={item.id}>
              {item.title}
            </NavLink>
          );
        })}
      </div>
      <div className={styles.ProfileNav}>
        <div className={styles.Notifs}>
          <img src={notifIcon} alt='Notification Icon' />
        </div>
        <div className={styles.ProfileImage}>
          <img src={props.image} alt='Profile Image' />
        </div>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default DashboardNav;
