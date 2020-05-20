import React from 'react';
import Navigator from './navigator/Navigator';
import Navbar from './components/Navbar/Navbar';

import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ToastProvider
        placement='top-right'
        autoDismissTimeout={6000}
        autoDismiss={true}>
        <Navigator />
      </ToastProvider>
    </div>
  );
}

export default App;
