import { darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

const ITEMS = [{
  name: 'course',
  text: 'Course',
}, {
  name: 'assignment',
  text: 'Assignment',
}, {
  name: 'teacher',
  text: 'Teacher',
  active: true,
}, {
  name: 'student',
  text: 'Student',
}];

const Wrapper = styled.nav`
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  padding: ${(props) => `${props.theme.gutter.xs} ${props.theme.gutter.md}`};
  color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.typography.weight.bold};
  font-size: ${(props) => props.theme.typography.size.sm};
  letter-spacing: 1px;

  &:hover {
    color: ${(props) => props.theme.color.white};
    background: ${(props) => darken(0.1, props.theme.backgroundColor.secondary)}
  }

  ${(props) => props.active && css`
    color: ${(props) => props.theme.color.info};
  `}
`;

const Navigation = () => (
  <Wrapper>
    {ITEMS.map((i) => (
      <Link key={i.name} href="/" active={i.active}>{i.text}</Link>
    ))}
  </Wrapper>
);

export default Navigation;
