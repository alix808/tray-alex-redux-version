import { USER_PATH, PRIVACY_PATH, DONE_PATH } from '../actions/types';

const initialState = {
  userPath: false,
  privacyPath: false,
  donePath: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_PATH:
      return {
        ...state,
        userPath: true,
        privacyPath: false,
        donePath: false
      };
    case PRIVACY_PATH:
      return {
        ...state,
        privacyPath: true,
        userPath: false,
        donePath: false
      };
    case DONE_PATH:
      return {
        ...state,
        donePath: true,
        userPath: false,
        privacyPath: false
      };

    default:
      return state;
  }
};
