import React from 'react';
import Box from '../Box';
import Flex from '../Flex';
import Text from '../Text';
import logo from './assets/logo.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

const SIDE_MENU_WIDTH = ['70px', null, '250px'];
const HEADER_HEIGHT = '75px';

const Layout = ({
  children,
}) => (
  <Box>
    <SideMenu 
      position="fixed"
      top="0"
      left="0"
      width={SIDE_MENU_WIDTH}
      title={(
        <Flex 
          alignItems="center"
          justifyContent={["center", null, "flex-start"]}
          height={HEADER_HEIGHT}
          borderBottom="default"
          px={[null, null, 'md']}
        >
          <img height="30px" src={logo} alt="Campus 2.0" />
          <Box display={['none', null, 'inline-block']}>
            <Text fontSize="lg">Campus 2.0</Text>
          </Box>
        </Flex>
      )}
    />
    <Header 
      position="fixed"
      top="0"
      right="0"
      left={SIDE_MENU_WIDTH}
      height={HEADER_HEIGHT}
    />
    <Box 
      py="lg" 
      px="md"
      mt={HEADER_HEIGHT}
      ml={SIDE_MENU_WIDTH}
    >
      {children}
      <Footer mt="lg" />
    </Box>
  </Box>
);

export default Layout;