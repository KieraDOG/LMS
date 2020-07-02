import React from 'react';
import Flex from '../Flex';

const AuthenticationLayout = ({
  children,
}) => (
  <Flex
    minWidth="100vw"
    minHeight="100vh"
    backgroundColor="lightGrey"
    alignItems={['flex-start', null, "center"]}
    justifyContent="center"
  >
    <Flex
      my={[null, null, 'lg']}
      backgroundColor="white"
      borderRadius={[null, null, 'md']}
      flexDirection={['column', null, 'row']}
    >
      {children}
    </Flex>
  </Flex>
);


export default AuthenticationLayout;
