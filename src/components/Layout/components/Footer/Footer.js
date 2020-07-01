import React from 'react';
import Flex from '../../../Flex';
import Text from '../../../Text';

const Footer = (props) => (
  <Flex
    {...props}
    justifyContent="center"
    borderTop="default"
    pt="sm"
  >
    <Text 
      fontSize="sm" 
      color="grey"
    >
      Made with Coffee & Love
    </Text>
  </Flex>
);

export default Footer;
