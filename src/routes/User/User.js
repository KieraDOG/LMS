import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from '../../components/Layout';
import PrivateRoute from '../../components/PrivateRoute';
import Courses from '../../pages/Courses';
import CreateCourse from '../../pages/Courses/Create';
import Dashboard from '../../pages/Dashboard';

const User = () => (
  <Layout>
    <Switch>
      <PrivateRoute path="/" exact>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/courses" exact>
        <Courses />
      </PrivateRoute>
      <PrivateRoute path="/courses/create" exact>
        <CreateCourse />
      </PrivateRoute>
    </Switch>
  </Layout>
);

export default User;