import axios from 'axios';
import {
  SET_LOADING,
  VALIDATE,
  INVALID,
  REGISTER_USER,
  CHECK_BOX_ONE,
  CHECK_BOX_TWO
} from './types';

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Check that the password contains at least one number, one lowercase letter, & one uppercase letter
export const validateOne = password => {
  const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');

  if (re.test(password)) {
    return true;
  } else {
    return false;
  }
};

// Check that password and password2 match
export const validateTwo = (password, password2) => {
  if (password === password2) {
    return true;
  } else {
    return false;
  }
};

// Check the previous functions
export const validateThree = (password, password2) => {
  let data1 = false;
  let data2 = false;

  data1 = validateOne(password);
  data2 = validateTwo(password, password2);

  if (data1 && data2) {
    return {
      type: VALIDATE,
      payload: true
    };
  } else {
    return {
      type: INVALID,
      payload: false
    };
  }
};

// Add user to database ie db.json file
export const registerUser = user => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    setLoading();

    const res = await axios.post('/users', user, config);

    dispatch({
      type: REGISTER_USER,
      payload: res.data
    });
  } catch (err) {
    console.log('error');
  }
};

// Update checkBoxOne
export const setCheckBoxOne = () => {
  return {
    type: CHECK_BOX_ONE
  };
};

// Update checkBoxTwo
export const setCheckBoxTwo = () => {
  return {
    type: CHECK_BOX_TWO
  };
};
