import {
  setUserPath,
  setPrivacyPath,
  setDonePath,
  validatePath
} from './pathActions';
import { USER_PATH, PRIVACY_PATH, DONE_PATH } from './types';

// setUserPath test
test('Should return object with type USER_PATH', () => {
  expect(setUserPath()).toEqual({ type: USER_PATH });
});

// setPrivacyPath test
test('Should return object with type PRIVACY_PATH', () => {
  expect(setPrivacyPath()).toEqual({ type: PRIVACY_PATH });
});

// setDonePath test
test('Should return object with type DONE_PATH', () => {
  expect(setDonePath()).toEqual({ type: DONE_PATH });
});

// validatePath tests
test('Should return object with type USER_PATH', () => {
  expect(validatePath('/')).toEqual({ type: USER_PATH });
});

test('Should return object with type PRIVACY_PATH', () => {
  expect(validatePath('/privacy')).toEqual({ type: PRIVACY_PATH });
});

test('Should return object with type DONE_PATH', () => {
  expect(validatePath('/done')).toEqual({ type: DONE_PATH });
});
