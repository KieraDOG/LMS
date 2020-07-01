import { darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faChalkboardTeacher, faSchool, faUser } from '@fortawesome/free-solid-svg-icons';
import { display, textAlign } from 'styled-system';

const ITEMS = [{
  name: 'course',
  text: 'Course',
  icon: faSchool,
}, {
  name: 'assignment',
  text: 'Assignment',
  icon: faStickyNote,
}, {
  name: 'teacher',
  text: 'Teacher',
  icon: faChalkboardTeacher,
  active: true,
}, {
  name: 'student',
  text: 'Student',
  icon: faUser,
}];

const color = (props) => {
  if (!props.color) {
    return '';
  }

  const { theme } = props;
  const obj = theme.color;

  return css`
    color: ${obj[props.color]};
  `;
}

const fontSize = (props) => {
  if (!props.fontSize) {
    return '';
  }

  const { theme } = props;
  const obj = theme.typography.size;

  return css`
    font-size: ${obj[props.fontSize]};
  `;
}

const fontWeight = (props) => {
  if (!props.fontWeight) {
    return '';
  }

  const { theme } = props;
  const obj = theme.typography.weight;

  return css`
    font-weight: ${obj[props.fontWeight]};
  `;
}

const padding = (props) => {
  const { theme } = props;
  const obj = theme.gutter;

  const styles = [{
    key: 'p',
    properties: ['padding'],
  }, {
    key: 'px',
    properties: ['padding-right', 'padding-left'],
  }, {
    key: 'py',
    properties: ['padding-top', 'padding-bottom'],
  }, {
    key: 'pt',
    properties: ['padding-top'],
  }, {
    key: 'pr',
    properties: ['padding-right'],
  }, {
    key: 'pb',
    properties: ['padding-bottom'],
  }, {
    key: 'pl',
    properties: ['padding-left'],
  }];

  const string = styles
    .map((s) => {
      const path = props[s.key]
      if (!path) {
        return '';
      }

      return s.properties.map((property) => `${property}:${obj[path]};`).join('');
    })
    .join('');

  return css`
    ${string}
  `
};

const Wrapper = styled.nav`
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  ${padding}
  ${color}
  ${fontWeight}
  ${fontSize}
  ${textAlign}
  letter-spacing: 1px;

  &:hover {
    color: ${(props) => props.theme.color.white};
    background: ${(props) => darken(0.1, props.theme.backgroundColor.secondary)}
  }
`;

const Icon = styled.span`
  display: inline-block;
  width: 20px;
`;

const Text = styled.span`
  ${display}
  margin-left: ${(props) => props.theme.gutter.xs};
`;

const Navigation = () => (
  <Wrapper>
    {ITEMS.map((i) => (
      <Link 
        key={i.name} 
        py="sm"
        px="md"
        color={i.active ? 'info' : 'white'}
        fontWeight="bold"
        fontSize="sm"
        textAlign={['center', null, 'left']}
        href="/" 
      >
        <Icon>
          <FontAwesomeIcon icon={i.icon} />
        </Icon>
        <Text display={['none', null, 'inline-block']}>{i.text}</Text>
      </Link>
    ))}
  </Wrapper>
);

export default Navigation;
