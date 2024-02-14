import { NotFound } from '../pages/404';
import { CreateAccount } from '../pages/create-account';
import { Login } from '../pages/login';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-account">
          <CreateAccount />
        </Route>
        <Route path="/">
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Routes>
    </Router>
  );
};
