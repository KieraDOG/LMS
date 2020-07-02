import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography, layout, border, color } from 'styled-system';

const Label = styled.label`
  display: block;

  ${space}
  ${color}
`;

const TextField = styled.input`
  ${space}
  ${typography}
  ${layout}
  ${border}
`;

TextField.defaultProps = {
  width: '100%',
  border: 'default',
  borderRadius: 'sm',
  fontSize: 'md',
  px: 'sm',
  py: 'xs',
};

const Input = ({
  label,
  value,
  onChange,
  id,
  ...props
}) => (
  <>
    {label && <Label htmlFor={id} mb="xxs">{label}</Label>}
    <TextField id={id} value={value} onChange={onChange} {...props} />
  </>
)

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input;
