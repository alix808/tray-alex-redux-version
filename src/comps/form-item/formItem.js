import React from 'react';
import PropTypes from 'prop-types';
import './formItem.scss';

const FormItem = ({ object, value, onChange }) => {
  const { htmlFor, title, type, name, minLength, required } = object;

  return (
    <div className='form-group'>
      <label htmlFor={htmlFor}>{title}</label>
      {required ? (
        <input
          type={type}
          name={name}
          minLength={minLength}
          value={value}
          onChange={onChange}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          minLength={minLength}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

FormItem.propTypes = {
  object: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormItem;
