import React, {useEffect, useState} from 'react';
import { Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import './App.css';
import Home  from './containers/Home/Home';
import Store  from './containers/Store/Store';
import AdminProfile  from './containers/AdminProfile/AdminProfile';
import 'antd/dist/antd.css';

function App() {

  let initialClient = null;
  try {
    initialClient = JSON.parse(localStorage.getItem('client'));
  } catch (error) {
    console.error(error)
  }
  const [client, setClient] = useState(initialClient);

  return (
    <BrowserRouter>
    <Switch>
        <Route path='/' component={Home} exact />
{/*         <Route path='/store' component={Store} exact /> */}
        <Route path='/adminprofile' component={AdminProfile} exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
