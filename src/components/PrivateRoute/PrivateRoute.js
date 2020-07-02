import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// ACL Access Control Lists

// SOLI(D) => Dependency Injection
// 判断是否允许进入页面

// <PrivateRoute path="/courses" exact authenticated={!!authentication && authentication.role === 'TEACHER'}>
//   <Cousrse />
// </PrivateRoute>

const PrivateRoute = ({ 
  children, 
  authenticated,
  ...props 
}) => (
  <Route 
    {...props}
    render={() => {
      if (!authenticated) {
        return (<Redirect to="/sign-in" />);
      }

      return children;
    }}
  />
);

const mapStateToProps = (state) => ({
  authenticated: !!state.authentication.data,
});

export default connect(mapStateToProps)(PrivateRoute);


