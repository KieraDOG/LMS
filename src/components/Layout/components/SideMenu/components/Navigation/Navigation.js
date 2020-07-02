import { faChalkboardTeacher, faSchool, faStickyNote, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { display } from 'styled-system';
import Link from '../../../../../Link';

const ITEMS = [{
  name: 'dashboard',
  text: 'Dashboard',
  icon: faTachometerAlt,
  path: '/'
}, {
  name: 'courses',
  text: 'Courses',
  icon: faSchool,
}, {
  name: 'assignments',
  text: 'Assignments',
  icon: faStickyNote,
}, {
  name: 'teachers',
  text: 'Teachers',
  icon: faChalkboardTeacher,
  active: true,
}, {
  name: 'students',
  text: 'Students',
  icon: faUser,
}];

const width = (props) => {
  if (!props.width) {
    return '';
  }

  return css`
    width: ${props.width};
  `;
}

const margin = (props) => {
  const { theme } = props;
  const obj = theme.gutter;

  const styles = [{
    key: 'm',
    properties: ['margin'],
  }, {
    key: 'mx',
    properties: ['margin-right', 'margin-left'],
  }, {
    key: 'my',
    properties: ['margin-top', 'margin-bottom'],
  }, {
    key: 'mt',
    properties: ['margin-top'],
  }, {
    key: 'mr',
    properties: ['margin-right'],
  }, {
    key: 'mb',
    properties: ['margin-bottom'],
  }, {
    key: 'ml',
    properties: ['margin-left'],
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

const Icon = styled.span`
  ${display}
  ${width}
`;

const Text = styled.span`
  ${display}
  ${margin}
`;

const LinkItem = styled(Link)`
  &:hover {
    color: ${(props) => props.theme.color.white};
    background: ${(props) => darken(0.1, props.theme.backgroundColor.secondary)}
  }
`;

const Navigation = ({
  location,
}) => (
  <nav>
    {ITEMS.map((i) => {
      const to = i.path || `/${i.name}`

      return (
        <LinkItem
          key={i.name}
          display="block" 
          py="sm"
          px="md"
          color="white"
          activeColor="info"
          fontWeight="bold"
          fontSize="sm"
          textAlign={['center', null, 'left']}
          to={to}
        >
          <Icon display="inline-block" width="20px">
            <FontAwesomeIcon icon={i.icon} />
          </Icon>
          <Text display={['none', null, 'inline-block']} ml="sm">
            {i.text}
          </Text>
        </LinkItem>
      )
    })}
  </nav>
);

export default Navigation;
