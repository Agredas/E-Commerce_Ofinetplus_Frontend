import React, {useEffect, useState} from 'react';
import { Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import './App.css';
import Home  from './containers/Home/Home';
import Store  from './containers/Store/Store';
import Login  from './containers/Login/Login';
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
        <Route path='/' component={Home} exact >
        </Route>
        <Route path='/store' component={Store} exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
