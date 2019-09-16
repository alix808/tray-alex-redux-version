import { setAlertOne, setAlertTwo, removeAlert, object } from './alertActions';
import { ALERT_ONE, ALERT_TWO, REMOVE_ALERT } from './types';

// setAlertOne test
test('Should return type: ALERT_ONE & payload: object', () => {
  expect(setAlertOne()).toEqual({ type: ALERT_ONE, payload: object });
});

// setAlertTwo test
test('Should return type: ALERT_TWO & payload: object', () => {
  expect(setAlertTwo()).toEqual({ type: ALERT_TWO, payload: object });
});

// removeAlert test
test('Should return type: REMOVE_ALERT & payload: object', () => {
  expect(removeAlert()).toEqual({ type: REMOVE_ALERT, payload: object });
});
