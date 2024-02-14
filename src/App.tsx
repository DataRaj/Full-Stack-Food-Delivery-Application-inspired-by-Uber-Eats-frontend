import './styles/styles.css'
// import './App.css'
// import react from 'react'
import {gql, useQuery} from '@apollo/client'
import { LoggedInRouter } from './routers/Logged-in-router'
import { LoggedOutRouter } from './routers/Logged-out-router';
import { Login } from './pages/login';
const IS_LOGGED_IN = gql`
query isLoggedIn {
  isLoggedIn @client
}
`;
function App() {
  const {data} = useQuery(IS_LOGGED_IN)
  console.log(data.is)
  return (
    <>
    {
     !data.isLoggedIn ? <LoggedOutRouter /> : <LoggedInRouter/>
    }
    <Login/>
    </>
  )
}

export default App
