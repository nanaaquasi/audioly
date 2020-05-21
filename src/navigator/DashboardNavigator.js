import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router';
import Bookings from '../pages/Client/Bookings/Bookings';

const DashboardNavigator = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          path={`${match.path}/client_bookings`}
          exact
          component={Bookings}
        />
        <Route path={`${match.path}/projects`} exact component={Bookings} />
        <Route path={`${match.path}/payments`} exact component={Bookings} />
      </Switch>
    </>
  );
};

export default DashboardNavigator;
