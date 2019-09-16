import { ALERT_ONE, ALERT_TWO, REMOVE_ALERT } from '../actions/types';

const initialState = {
  alert: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERT_ONE:
      return {
        ...state,
        alert: action.payload
      };

    case ALERT_TWO:
      return {
        ...state,
        alert: action.payload
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alert: action.payload
      };

    default:
      return state;
  }
};
