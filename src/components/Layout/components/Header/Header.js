import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Flex from '../../../Flex';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  border-bottom: ${(props) => props.theme.border.default};
`;

const Left = styled.div`
  padding: ${(props) => `${props.theme.gutter.sm} ${props.theme.gutter.md}`};
  margin-left: auto;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  font-size: ${(props) => props.theme.typography.size.md};
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  padding: ${(props) => `${props.theme.gutter.xs} ${props.theme.gutter.sm}`};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.color.primary)};
  }
`;

const Header = ({
  className,
}) => (
  <Wrapper className={className}>
    <Flex>
      <Left>
        <Button>Logout</Button>
      </Left>
    </Flex>
  </Wrapper>
);

export default Header;
