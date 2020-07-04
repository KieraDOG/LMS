import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthenticationLayout from '../../components/AuthenticationLayout';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import SignInForm from '../../components/SignInForm';
import Text from '../../components/Text';
import signIn from '../../store/authentication/actions/signIn';

const getErrorMessage = (error) => {
  const { response } = error;
  const { data } = response;
  
  if (data.message === 'NOT_FOUND' || data.message === 'INVALID_PASSWORD') {
    return 'Email or password miss match.';
  }

  return 'Something wong, please try agin.';
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      loading: false,
    };

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  async handleSignIn(data) {
    const { handleSignIn } = this.props;

    this.setState({
      loading: true,
    });

    try {
      await handleSignIn(data);
    } catch (error) {
      this.setState({
        loading: false,
        error: getErrorMessage(error),
      });
    }
  }

  render() {
    const { loading, error } = this.state;

    return (
      <AuthenticationLayout>
        <Flex 
          color="white"
          order={[1, null, -1]}
          backgroundColor="primary"
          px={['md', null, 'xxl']}
          py="lg"
          alignItems="center"
          borderTopLeftRadius={[null, null, 'md']}
          borderBottomLeftRadius={[null, null, 'md']}
          width={['100%', null, '450px']}
        >
          <Box>
            <Box mb="md" display={['none', null, 'block']}>
              <Text fontSize="xxl" fontWeight="light">Hello Friend!</Text>
            </Box>
            <Box mb="md">
              <Text fontSize="xl" fontWeight="light" lineHeight="1.5">
                The next generation learning management system!
              </Text>
            </Box>
            <Box>
              <Button variant="info" to="/sign-up">Sign Up</Button>
            </Box>
          </Box>
        </Flex>
        <Box
          py="xxl"
          px={['md', null, 'xl']}
          width={['100%', null, '350px']}
        >
          <Flex justifyContent="center" mb="md">
            <Text color="primary" fontSize="xxl" fontWeight="light">Sign in</Text>
          </Flex>
          {error && (
            <Box px="sm" py="xs" mb="md" bg="error" color="white" borderRadius="sm">
              {error}
            </Box>
          )}
          <Box>
            <SignInForm 
              loading={loading}
              onSubmit={this.handleSignIn} 
            />
          </Box>
        </Box>
      </AuthenticationLayout>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch)  => ({
  handleSignIn: (data) => dispatch(signIn(data)),
});

const mergeProps = (state, dispatch, props) => ({
  ...state,
  ...dispatch,
  ...props,
  handleSignIn: async (data) => {
    await dispatch.handleSignIn(data);

    props.history.push('/');
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignIn));
