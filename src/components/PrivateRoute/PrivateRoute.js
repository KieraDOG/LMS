import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import getAuthentication from '../../store/authentication/actions/getAuthentication';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      authenticated: false,
    }
  }

  componentDidMount() {
    this.getAuthentication();
  }

  componentDidUpdate(props) {
    if (props.authenticated !== this.props.authenticated) {
      this.syncAuthentication();
    }
  }

  syncAuthentication() {
    const { authenticated } = this.props;

    this.setState({
      loading: false,
      authenticated,
    });
  }

  async getAuthentication() {
    const { authenticated } = this.props;

    if (authenticated) {
      this.setState({
        loading: false,
        authenticated: true,
      });

      return;
    }

    const { handleGetAuthentication } = this.props;

    try {
      await handleGetAuthentication();

      this.setState({
        loading: false,
        authenticated: true,
      });

    } catch(error) {
      this.setState({
        loading: false,
        authenticated: false,
      })
    }
  }

  render() {
    const { children, ...props } = this.props;
    const { loading, authenticated } = this.state;
    
    if (loading) {
      return 'Checking Authentication';
    }

    if (!authenticated) {
      return (
        <Route 
          {...props}
          render={() => (<Redirect to="/sign-in" />)}
        />
      );
    }

    return (
      <Route 
        {...props}
        render={() => children}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  authenticated: !!state.authentication.data,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetAuthentication: () => dispatch(getAuthentication()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);


