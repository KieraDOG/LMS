import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { color, layout, space, typography, position } from 'styled-system';

const LinkWrapper = styled.div`
  & > a {
    letter-spacing: 1px;
    text-decoration: none;
    ${position}
    ${layout}
    ${typography}
    ${space}
    ${color}
  }
`;

const Link = ({
  location,
  children,
  to,
  color,
  activeColor,
  className,
  ...props
}) => (
  <LinkWrapper
    color={activeColor && to === location.pathname ? activeColor : color}
    {...props}
  >
    <NavLink className={className} to={to}>
      {children}
    </NavLink>
  </LinkWrapper>
);

// HOC: Higher Order Component
// Curly function
// Closure
export default withRouter(Link);
