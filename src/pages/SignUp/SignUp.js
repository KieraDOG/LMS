import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthenticationLayout from '../../components/AuthenticationLayout';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import SignUpForm from '../../components/SignUpForm';
import Text from '../../components/Text';
import signUp from '../../store/authentication/actions/signUp';

const getErrorMessage = (error) => {
  const { response } = error;
  const { data } = response;
  
  if (data.message === 'EXISTS') {
    return 'Email already exists, please try another one.';
  }

  return 'Something wong, please try agin.';
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      loading: false,
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignUp(data) {
    const { handleSignUp } = this.props;

    this.setState({
      loading: true,
    });

    try {
      await handleSignUp(data);
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
        <Box
          py="xxl"
          px={['md', null, 'xl']}
          width={['100%', null, '350px']}
        >
          <Flex justifyContent="center" mb="md">
            <Text color="primary" fontSize="xxl" fontWeight="light">Sign up</Text>
          </Flex>
          {error && (
            <Box px="sm" py="xs" mb="md" bg="error" color="white" borderRadius="sm">
              {error}
            </Box>
          )}
          <SignUpForm 
            loading={loading}
            onSubmit={this.handleSignUp} 
          />
        </Box>
        <Flex 
          color="white"
          backgroundColor="primary"
          px={['md', null, 'xxl']}
          py="lg"
          alignItems="center"
          borderTopRightRadius={[null, null, 'md']}
          borderBottomRightRadius={[null, null, 'md']}
          width={['100%', null, '450px']}
        >
          <Box>
            <Box mb="md" display={['none', null, 'block']}>
              <Text fontSize="xxl" fontWeight="light">Welcome</Text>
            </Box>
            <Box mb="md">
              <Text fontSize="xl" fontWeight="light" lineHeight="1.5">
                Enter your personal details and start your journey with us.
              </Text>
            </Box>
            <Box>
              <Button variant="info" to="/sign-in">Sign In</Button>
            </Box>
          </Box>
        </Flex>
      </AuthenticationLayout>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch)  => ({
  handleSignUp: (data) => dispatch(signUp(data)),
});

const mergeProps = (state, dispatch, props) => ({
  ...state,
  ...dispatch,
  ...props,
  handleSignUp: async (data) => {
    await dispatch.handleSignUp(data);

    props.history.push('/');
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(SignUp));
