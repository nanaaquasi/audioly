import React from 'react';

import styles from './Dashboard.module.css';
import DashboardNav from '../../components/DashNav/DashboardNav';
import DashboardNavigator from '../../navigator/DashboardNavigator';

const Dashboard = () => {
  return (
    <>
      <section className={styles.DashboardLayout}>
        <nav className={styles.Navbar}>
          <DashboardNav />
        </nav>
        <div className={styles.Content}>
          <DashboardNavigator />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
