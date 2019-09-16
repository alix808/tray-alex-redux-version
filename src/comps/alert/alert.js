import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './alert.scss';

const Alert = ({ alertState }) => {
  const { alert } = alertState;

  if (alert.status !== true) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-circle' /> {alert.msg}
    </div>
  );
};

Alert.propTypes = {
  alertState: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  alertState: state.alertState
});

export default connect(mapStateToProps)(Alert);
