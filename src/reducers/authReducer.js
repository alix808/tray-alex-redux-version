import {
  SET_LOADING,
  VALIDATE,
  INVALID,
  REGISTER_USER,
  CHECK_BOX_ONE,
  CHECK_BOX_TWO
} from '../actions/types';

const initialState = {
  loading: false,
  validPassword: false,
  user: {},
  error: false,
  checkBoxOne: false,
  checkBoxTwo: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case VALIDATE:
      return {
        ...state,
        validPassword: action.payload
      };

    case INVALID:
      return {
        ...state,
        validPassword: action.payload
      };

    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    case CHECK_BOX_ONE:
      return {
        ...state,
        checkBoxOne: !state.checkBoxOne
      };

    case CHECK_BOX_TWO:
      return {
        ...state,
        checkBoxTwo: !state.checkBoxTwo
      };

    default:
      return state;
  }
};
