import React from 'react';
import './submitButton.scss';

const SubmitButton = () => {
  return (
    <div className='flex-item-btn'>
      <input type='submit' value='Submit' className='submit' />
    </div>
  );
};

export default SubmitButton;
