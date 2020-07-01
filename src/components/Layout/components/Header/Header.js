import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Flex from '../../../Flex';
import Box from '../../../Box';

const getTheme = (path) => (props)  => path
  .split('.')
  .reduce((obj, key) => obj[key], props.theme);

const Left = styled.div`
  padding-top: ${getTheme('gutter.sm')};
  padding-right: ${getTheme('gutter.md')};
  padding-bottom: ${getTheme('gutter.sm')};
  padding-left: ${getTheme('gutter.md')};
  margin-left: auto;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  font-size: ${getTheme('typography.size.md')};
  background-color: ${getTheme('color.primary')};
  color: ${getTheme('color.white')};
  padding-top: ${getTheme('gutter.xs')};
  padding-right: ${getTheme('gutter.sm')};
  padding-bottom: ${getTheme('gutter.xs')};
  padding-left: ${getTheme('gutter.sm')};
  border-radius: ${getTheme('borderRadius.sm')};
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    background-color: ${(props) => darken(0.1, getTheme('color.primary')(props))};
  }
`;

const Header = (props) => (
  <Box 
    {...props}
    backgroundColor="white"
    borderBottom="default"
  >
    <Flex>
      <Left>
        <Button>Logout</Button>
      </Left>
    </Flex>
  </Box>
);

export default Header;
