import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router';
import Bookings from '../pages/Client/Bookings/Bookings';
import ClientHomePage from '../pages/Client/Home/ClientHomePage';
import Payments from '../pages/Client/Payments/Payments';

const DashboardNavigator = () => {
  const match = useRouteMatch();
  return (
    <>
      <Route exact path={match.path}>
        <ClientHomePage />
      </Route>
      <Switch>
        <Route
          path={`${match.path}/client_bookings`}
          exact
          component={Bookings}
        />
        <Route path={`${match.path}/projects`} exact component={Bookings} />
        <Route path={`${match.path}/payments`} exact component={Payments} />
      </Switch>
    </>
  );
};

export default DashboardNavigator;
