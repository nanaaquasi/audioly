import React from 'react';
import { Route, useRouteMatch, Switch, Redirect } from 'react-router';
import Bookings from '../pages/Client/Bookings/Bookings';

import HomePage from '../pages/Admin/Home/HomePage';
import Clients from '../pages/Admin/Clients/Clients';

const AdminNavigator = () => {
  const match = useRouteMatch();

  console.log(match.path);
  return (
    <>
      <Route exact path={match.path}>
        <HomePage />
      </Route>
      <Switch>
        <Route path={`${match.path}/clients`} exact component={Clients} />
        <Route path={`${match.path}/projects`} exact component={Bookings} />
      </Switch>
    </>
  );
};

export default AdminNavigator;
