import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import User from '../User';

const Root = () => (
  <Router  basename="/lms">
    <Switch>
      <Route path="/sign-in" exact>
        <SignIn />
      </Route>
      <Route path="/sign-up" exact>
        <SignUp />
      </Route>
      <User />
    </Switch>
  </Router>
);

export default Root;