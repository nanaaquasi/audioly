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
  const isAuth = useSelector((state) => state.tokenID !== null);
  return (
    <div>
      <Route path='/' exact component={Home}></Route>
      <Switch>
        <Route path='/portfolio' component={PortfolioPage}></Route>
        <Route path='/services' component={ServicesPage}></Route>
        <Route path='/auth' component={AuthPage}></Route>
        <Route path='/bookings' component={BookingsPage}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        {!isAuth && <Redirect to='/' />}
      </Switch>
    </div>
  );
};

export default Navigator;
