import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home/Homepage';
import PortfolioPage from '../pages/Our Works/PortfolioPage';
import ServicesPage from '../pages/Services/ServicesPage';
import AuthPage from '../pages/Auth/AuthPage';
import BookingsPage from '../pages/Bookings/BookingsPage';

const Navigator = () => {
  return (
    <div>
      <Route path='/' exact component={Home}></Route>
      <Switch>
        <Route path='/portfolio' component={PortfolioPage}></Route>
        <Route path='/services' component={ServicesPage}></Route>
        <Route path='/auth' component={AuthPage}></Route>
        <Route path='/bookings' component={BookingsPage}></Route>
      </Switch>
    </div>
  );
};

export default Navigator;
