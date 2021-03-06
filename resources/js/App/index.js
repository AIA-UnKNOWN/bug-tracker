import { useSelector } from 'react-redux';
import useApp from './hook';
import AuthPage from '@pages/AuthPage';
import Dashboard from '@pages/Dashboard';

const App = () => {
  useApp();
  const isAuthenticated = useSelector(state => state.user.user.isAuthenticated);

  if (!isAuthenticated) return (
    <div className="flex justify-center items-center h-screen w-screen">
      <AuthPage />
    </div>
  );

  return (
    <Dashboard />
  );
}

export default App;