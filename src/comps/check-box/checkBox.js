import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ onChange, string }) => {
  return (
    <div>
      <input type='checkbox' onChange={onChange} />
      {string}
    </div>
  );
};

CheckBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  string: PropTypes.string.isRequired
};

export default CheckBox;
