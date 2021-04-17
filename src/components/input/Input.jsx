import React from 'react';
import PropTypes from 'prop-types';
import { InputContent, InputWrapper } from './Input.style';

const Input = ({
  value, placeholder, readOnly, children, getEvent, onChange, type,
}) => {
  const onInputChange = (e) => {
    onChange(getEvent ? e : e.target.value);
  };
  return (
    <InputWrapper>
      <InputContent
        value={value}
        type={type}
        onChange={onInputChange}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      {children}
    </InputWrapper>
  );
};

Input.defaultProps = {
  value: '',
  children: null,
  readOnly: false,
  getEvent: null,
  type: 'text',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.element,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  getEvent: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
