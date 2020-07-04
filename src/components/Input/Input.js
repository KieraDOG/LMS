import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography, layout, border, color } from 'styled-system';
import Box from '../Box';

const Label = styled.label`
  display: block;

  ${space}
  ${color}
`;

const TextField = styled.input`
  -webkit-appearance: none;
  outline: 0;

  ${space}
  ${typography}
  ${layout}
  ${border}
  ${color}

  &:focus {
    border-color: ${(props) => props.theme.colors.primary}
  }
`;

TextField.defaultProps = {
  width: '100%',
  border: 'default',
  borderRadius: 'sm',
  borderColor: 'border',
  fontSize: 'md',
  px: 'sm',
  py: 'xs',
};

const Input = ({
  label,
  value,
  onChange,
  id,
  error,
  ...props
}) => (
  <>
    {label && (
      <Label 
        htmlFor={id} 
        mb="xxs"
        {...error && {
          color: 'error',
        }}
      >
        {label}
      </Label>
    )}
    <TextField 
      id={id} 
      value={value} 
      onChange={onChange} 
      {...props}  
      {...error && {
        borderColor: 'error',
        color: 'error',
      }}
    />
    {error && (
      <Box px="sm" py="xs" mb="md" bg="error" color="white" borderRadius="sm" mt="xs">
        {error}
      </Box>
    )}
  </>
)

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input;
