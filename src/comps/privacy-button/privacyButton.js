import React from 'react';
import PropTypes from 'prop-types';
import './privacyButton.scss';

const PrivacyButton = ({ onClick }) => {
  return (
    <div className='flex-item-btn'>
      <button className='submit' onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

PrivacyButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default PrivacyButton;
