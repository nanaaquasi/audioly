import React from 'react';
import Navigator from './navigator/Navigator';
import Navbar from './components/Navbar/Navbar';

import { ToastProvider } from 'react-toast-notifications';
import { useDispatch } from 'react-redux';
import { checkAuthState } from './store/actions/auth.actions';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkAuthState());
  });

  return (
    <div className='App'>
      {/* <Navbar /> */}
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
