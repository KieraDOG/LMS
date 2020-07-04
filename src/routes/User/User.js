import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout';
import PrivateRoute from '../../components/PrivateRoute';
import Courses from '../../pages/Courses';
import CreateCourse from '../../pages/Courses/Create';
import Dashboard from '../../pages/Dashboard';

const User = () => (
  <PrivateRoute>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/courses/create" exact>
          <CreateCourse />
        </Route>
      </Switch>
    </Layout>
  </PrivateRoute>
);

export default User;