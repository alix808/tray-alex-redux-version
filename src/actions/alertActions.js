import { ALERT_ONE, ALERT_TWO, REMOVE_ALERT } from './types';

export let object = {};

// Set password alert
export const setAlertOne = () => {
  let alertString =
    'Passwords must match, contain at least one number, one lowercase letter & one uppercase letter';

  object.status = true;
  object.msg = alertString;
  object.type = 'danger';

  return {
    type: ALERT_ONE,
    payload: object
  };
};

// Set alert for successful sign up
export const setAlertTwo = () => {
  let alertString = 'Check the db.json file in the route directory!';

  object.status = true;
  object.msg = alertString;
  object.type = 'success';

  return {
    type: ALERT_TWO,
    payload: object
  };
};

// Remove Alert
export const removeAlert = () => {
  object.status = false;

  return {
    type: REMOVE_ALERT,
    payload: object
  };
};
