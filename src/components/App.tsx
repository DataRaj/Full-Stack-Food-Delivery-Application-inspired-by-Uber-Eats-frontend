import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apolloConfig';
import { LoggedInRouter } from '../routers/Logged-in-router';
import { LoggedOutRouter } from '../routers/Logged-out-router';

export const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
};
