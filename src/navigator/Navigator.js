import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from '../pages/Home/Homepage';
import PortfolioPage from '../pages/Our Works/PortfolioPage';
import ServicesPage from '../pages/Services/ServicesPage';
import AuthPage from '../pages/Auth/AuthPage';
import BookingsPage from '../pages/Bookings/BookingsPage';
import Dashboard from '../pages/Dashboard/Dashboard';

import { useSelector } from 'react-redux';

const Navigator = () => {
  const isAuth = useSelector((state) => state.tokenID);

  let routes = (
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/portfolio' component={PortfolioPage}></Route>
      <Route path='/services' component={ServicesPage}></Route>
      <Route path='/auth' component={AuthPage}></Route>
      <Route path='/bookings' component={BookingsPage}></Route>
      <Redirect to='/' />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        <Route path='/portfolio' component={PortfolioPage}></Route>
        <Route path='/services' component={ServicesPage}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/bookings' component={BookingsPage}></Route>
        <Route path='/' exact component={Home}></Route>
      </Switch>
    );
  }

  return <div>{routes}</div>;
};

export default Navigator;
