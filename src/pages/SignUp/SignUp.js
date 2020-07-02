import React from 'react';
import { connect } from 'react-redux';
import AuthenticationLayout from '../../components/AuthenticationLayout';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Input from '../../components/Input';
import Text from '../../components/Text';
import signUp from '../../store/authentication/actions/signUp';

const SignUp = ({
  handleSignUp,
}) => (
  <AuthenticationLayout>
    <Box
      py="xxl"
      px="xl"
      borderTopLeftRadius="md"
      borderBottomLeftRadius="md"
    >
      <Flex justifyContent="center" mb="md">
        <Text color="primary" fontSize="xxl" fontWeight="light">Sign up</Text>
      </Flex>
      <Box mb="md">
        <Input 
          width="300px" 
          id="email" 
          label="Email" 
        />
      </Box>
      <Box mb="md">
        <Input 
          width="300px" 
          id="password" 
          type="password" 
          label="Password" 
        />
      </Box>
      <Box mb="md">
        <Input 
          width="300px" 
          id="confirm-password"
          type="password" 
          label="Confirm password" 
        />
      </Box>
      <Flex justifyContent="center">
        <Button width="200px" outline variant="primary" onClick={handleSignUp}>Sign Up</Button>
      </Flex>
    </Box>
    <Flex 
      color="white"
      backgroundColor="primary"
      px="xxl"
      alignItems="center"
      borderTopRightRadius="md"
      borderBottomRightRadius="md"
      maxWidth="450px"
    >
      <Box>
        <Box mb="md">
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

const mapDispatchToProps = (dispatch)  => ({
  handleSignUp: () => dispatch(signUp()),
});

export default connect(null, mapDispatchToProps)(SignUp);
