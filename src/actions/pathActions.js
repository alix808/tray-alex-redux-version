import { USER_PATH, PRIVACY_PATH, DONE_PATH } from './types';

// Set user path to true
export const setUserPath = () => {
  return {
    type: USER_PATH
  };
};

// Set user privacy path to true
export const setPrivacyPath = () => {
  return {
    type: PRIVACY_PATH
  };
};

// Set done path to true
export const setDonePath = () => {
  return {
    type: DONE_PATH
  };
};

export const validatePath = path => {
  if (path === '/') {
    return { type: USER_PATH };
  }
  if (path === '/privacy') {
    return { type: PRIVACY_PATH };
  }
  if (path === '/done') {
    return { type: DONE_PATH };
  }
};
