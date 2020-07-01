import React from 'react';
import Box from '../../../Box';
import Navigation from './components/Navigation';

const SideMenu = ({ 
  title,
  ...props
}) => (
  <Box 
    {...props}
    color="white" 
    backgroundColor="bgSecondary" 
    minHeight="100vh"
  >
    {title}
    <br />
    <Navigation />
  </Box>
);

export default SideMenu;
