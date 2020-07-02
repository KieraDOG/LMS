import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { border, buttonStyle, space, typography, variant, layout } from 'styled-system';
import Box from '../Box';
import Link from '../Link';

const defaultVariant = {
  variants: {
    default: {
      color: 'black',
      bg: 'lightGrey',
      borderColor: 'lightGrey',
    },
    primary: {
      color: 'white',
      bg: 'primary',
      borderColor: 'primary',
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      borderColor: 'secondary',
    },
    success: {
      color: 'white',
      bg: 'success',
      borderColor: 'success',
    },
    error: {
      color: 'white',
      bg: 'error',
      borderColor: 'error',
    },
    info: {
      color: 'white',
      bg: 'info',
      borderColor: 'info',
    },
  }
};

const outlineVariant = {
  variants: {
    default: {
      color: 'black',
      bg: 'transparent',
      borderColor: 'lightGrey',
    },
    primary: {
      color: 'primary',
      bg: 'transparent',
      borderColor: 'primary',
    },
    secondary: {
      color: 'secondary',
      bg: 'transparent',
      borderColor: 'secondary',
    },
    success: {
      color: 'success',
      bg: 'transparent',
      borderColor: 'success',
    },
    error: {
      color: 'error',
      bg: 'transparent',
      borderColor: 'error',
    },
    info: {
      color: 'info',
      bg: 'transparent',
      borderColor: 'info',
    },
  }
}

const styles = css`
  outline: 0;
  border: 0;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  ${buttonStyle}
  ${space}
  ${typography}
  ${border}
  ${layout}
  ${(props) => variant(props.outline ? outlineVariant : defaultVariant)(props)}
`;

const BaseButton = styled.button`
  ${styles}
`;

BaseButton.defaultProps = {
  display: 'inline-block',
  variant: 'default',
  fontSize: 'md',
  px: 'md',
  py: 'xs',
  borderRadius: 'sm',
  border: 'default',
};


const Button = ({
  children,
  to,
  ...props
}) => {
  if (to) {
    return (
      <BaseButton 
        as={Box}
        position="relative" 
        {...props}
      >
        {children}
        <Link 
          position="absolute" 
          top="0"
          right="0"
          bottom="0"
          left="0"
          to={to} 
        />
      </BaseButton>
    );
  }

  return (
    <BaseButton {...props}>{children}</BaseButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;