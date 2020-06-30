import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';

const Wrapper = styled.div`
  min-height: 100vh;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.backgroundColor.secondary};
`;

const SideMenu = ({ 
  className,
  title
}) => (
  <Wrapper className={className}>
    {title}
    <br />
    <Navigation />
  </Wrapper>
);

export default SideMenu;
