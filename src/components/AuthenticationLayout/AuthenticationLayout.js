import React from 'react';
import Flex from '../Flex';

const AuthenticationLayout = ({
  children,
}) => (
  <Flex
    minWidth="100vw"
    minHeight="100vh"
    backgroundColor="lightGrey"
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      m="lg"
      backgroundColor="white"
      borderRadius="md"
    >
      {children}
    </Flex>
  </Flex>
);


export default AuthenticationLayout;
