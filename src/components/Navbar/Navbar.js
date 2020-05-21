import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../store/actions/auth.actions';
import { Link as ScrollLink } from 'react-scroll';

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
        <div className={styles.NavCenter}>
          <Link to='/services' className={styles.NavItem}>
            Services
          </Link>
          <Link to='/portfolio' className={styles.NavItem}>
            Showcase
          </Link>
          <Link to='/bookings' className={styles.NavItem}>
            Pricing
          </Link>
          <ScrollLink
            to='contact'
            className={styles.NavItem}
            smooth={true}
            spy={true}>
            Contact Us
          </ScrollLink>
        </div>
        <div className={styles.NavEnd}>
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
            <a onClick={logoutHandler} className={styles.NavItem}>
              Log Out
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
