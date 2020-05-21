import React from 'react';

import Navbar from '../components/Navbar/Navbar';

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
