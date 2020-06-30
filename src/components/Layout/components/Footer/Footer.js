import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  font-size: ${(props) => props.theme.typography.size.sm};
  text-align: center;
  color: ${(props) => props.theme.typography.color.info};
  border-top: ${(props) => props.theme.border.default};
  padding-top: ${(props) => props.theme.gutter.sm};
`;


const Footer = ({ className }) => (
  <Wrapper className={className}>
    Made with Coffee & Love
  </Wrapper>
);

export default Footer;
