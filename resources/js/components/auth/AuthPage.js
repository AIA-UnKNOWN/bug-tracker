import { useState } from 'react';

import Register from './Register';
import Login from './Login';


const AuthPage = () => {
  const [currentPage, setCurrentPage] = useState('login');

  if (currentPage === 'register') return (
    <Register
      onSwtichLoginTab={() => setCurrentPage('login')}
    />
  );

  return (
    <Login
      onSwitchRegisterTab={() => setCurrentPage('register')}
    />
  );
}

export default AuthPage;