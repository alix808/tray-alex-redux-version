import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validateThree, registerUser } from '../../actions/authActions';
import { validatePath } from '../../actions/pathActions';
import {
  setAlertOne,
  setAlertTwo,
  removeAlert
} from '../../actions/alertActions';
import FormItem from '../form-item/formItem';
import SubmitButton from '../submit-button/submitButton';
import {
  nameObj,
  roleObj,
  emailObj,
  passObj,
  pass2Obj
} from '../form-types/formTypes';
import './registerForm.scss';

const RegisterForm = props => {
  const {
    validateThree,
    registerUser,
    history,
    validatePath,
    setAlertOne,
    setAlertTwo,
    removeAlert
  } = props;

  useEffect(() => {
    validatePath(history.location.pathname);
    // eslint-disable-next-line
  }, []);

  const [user, setUser] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, role, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    formValidation();
  };

  const formValidation = () => {
    let value = validateThree(password, password2);
    if (value.payload) {
      registerUser(user);
      setAlertTwo();
      setTimeout(() => removeAlert(), 5000);
      history.push('/privacy');
    } else {
      setAlertOne();
      setTimeout(() => removeAlert(), 5000);
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit}>
        <FormItem object={nameObj} value={name} onChange={onChange} />
        <FormItem object={roleObj} value={role} onChange={onChange} />
        <FormItem object={emailObj} value={email} onChange={onChange} />
        <FormItem object={passObj} value={password} onChange={onChange} />
        <FormItem object={pass2Obj} value={password2} onChange={onChange} />
        <SubmitButton />
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  validateThree: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  validatePath: PropTypes.func.isRequired,
  setAlertOne: PropTypes.func.isRequired,
  setAlertTwo: PropTypes.func.isRequired,
  removeAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  path: state.path,
  alertState: state.alertState
});

export default connect(
  mapStateToProps,
  {
    validateThree,
    registerUser,
    validatePath,
    setAlertOne,
    setAlertTwo,
    removeAlert
  }
)(RegisterForm);
