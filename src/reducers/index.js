import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pathReducer from './pathReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  auth: authReducer,
  path: pathReducer,
  alertState: alertReducer
});
