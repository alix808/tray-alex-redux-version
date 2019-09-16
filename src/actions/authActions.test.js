import { validateOne, validateTwo, validateThree } from './authActions';
import { VALIDATE, INVALID } from './types';

// validateOne tests
test('Valid password should return true', () => {
  expect(validateOne('Parachuting1')).toBe(true);
});

test('Invalid password should return false', () => {
  expect(validateOne('123')).toBe(false);
});

// validateTwo tests
test('Equal strings should return true', () => {
  expect(validateTwo('Password1', 'Password1')).toBe(true);
});

test('Different strings should return false', () => {
  expect(validateTwo('Different', 'Strings')).toBe(false);
});

// validateThree tests
test('Should return type: VALIDATE & payload: true', () => {
  expect(validateThree('Parachuting1', 'Parachuting1')).toEqual({
    type: VALIDATE,
    payload: true
  });
});

test('Should return type: INVALID & payload: false', () => {
  expect(validateThree('123', 'Parachuting1')).toEqual({
    type: INVALID,
    payload: false
  });
});
