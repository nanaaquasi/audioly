import React from 'react';
import DashboardNav from '../../../components/DashNav/DashboardNav';
import AdminNavigator from '../../../navigator/AdminNavigator';
import { adminDashboardLinks, adminInfo } from '../../../mock';

import styles from '../../../components/DashNav/DashNav.module.css';
import dashboardStyles from '../../../pages/Dashboard/Dashboard.module.css';
import { useRouteMatch } from 'react-router';

const AdminDashboard = () => {
  const match = useRouteMatch();

  return (
    <>
      <section className={dashboardStyles.DashboardLayout}>
        <nav className={styles.Navbar}>
          <DashboardNav
            links={adminDashboardLinks}
            match={match}
            image={adminInfo.profileImage}
            name={adminInfo.username}
          />
        </nav>
        <div className={styles.Content}>
          <AdminNavigator />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
