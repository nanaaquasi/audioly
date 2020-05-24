import React from 'react';

import styles from './Dashboard.module.css';
import DashboardNav from '../../components/DashNav/DashboardNav';
import DashboardNavigator from '../../navigator/DashboardNavigator';
import { clientDashboardLinks, clientInfo } from '../../mock';
import { useRouteMatch } from 'react-router';

const Dashboard = () => {
  const match = useRouteMatch();

  console.log({ Dashboard: match });

  return (
    <>
      <section className={styles.DashboardLayout}>
        <nav className={styles.Navbar}>
          <DashboardNav
            links={clientDashboardLinks}
            match={match}
            image={clientInfo.profileImage}
            name={clientInfo.username}
          />
        </nav>
        <div className={styles.Content}>
          <DashboardNavigator />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
