import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './comps/nav-bar/navBar';
import Alert from './comps/alert/alert';
import RegisterForm from './comps/register-form/registerForm';
import Privacy from './pages/privacy/privacy';
import Done from './pages/done/done';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Alert />
        <Switch>
          <Route exact path='/' component={RegisterForm}></Route>
          <Route exact path='/privacy' component={Privacy}></Route>
          <Route exact path='/done' component={Done}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
