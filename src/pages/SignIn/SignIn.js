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

const SignIn = ({
  handleSignIn,
  loading,
}) => (
  <AuthenticationLayout>
    <Flex 
      color="white"
      backgroundColor="primary"
      px="xxl"
      alignItems="center"
      borderTopLeftRadius="md"
      borderBottomLeftRadius="md"
      maxWidth="450px"
    >
      <Box>
        <Box mb="md">
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
      px="xl"
      borderTopRightRadius="md"
      borderBottomRightRadius="md"
    >
      <Flex justifyContent="center" mb="md">
        <Text color="primary" fontSize="xxl" fontWeight="light">Sign in</Text>
      </Flex>
      <SignInForm loading={loading} onSubmit={handleSignIn} />
    </Box>
  </AuthenticationLayout>
);

const mapStateToProps = (state) => ({
  loading: state.authentication.loading,
});

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
