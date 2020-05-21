import React from 'react';

import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../store/actions/auth.actions';

import styles from './Navbar.module.css';

const Navbar = () => {
  const isAuth = useSelector((state) => state.tokenID);

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(authLogout());
    history.push('/');
  };

  return (
    <div className={styles.Navbar}>
      <nav>
        <div className={styles.Logo}>
          <Link to='/'>
            <h1>audioly.</h1>
          </Link>
        </div>
        <ul>
          <Link to='/services' className={styles.NavItem}>
            Services
          </Link>
          <Link to='/portfolio' className={styles.NavItem}>
            Showcase
          </Link>
          <Link to='/bookings' className={styles.NavItem}>
            Pricing
          </Link>
          {!isAuth && (
            <Link to='/auth' className={styles.NavItem}>
              Log In
            </Link>
          )}
          {isAuth && (
            <Link to='/dashboard' className={styles.NavItem}>
              Dashboard
            </Link>
          )}
          {isAuth && (
            <li onClick={logoutHandler} className={styles.NavItem}>
              Log Out
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
