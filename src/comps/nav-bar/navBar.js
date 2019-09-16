import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './navBar.scss';

const NavBar = props => {
  const { path, auth } = props;
  const { userPath, privacyPath, donePath } = path;
  const { validPassword } = auth;

  return (
    <div className='flex-container'>
      <Link to='/' className='flex-item' style={userPath ? color : null}>
        User
      </Link>
      <Link
        to={validPassword ? '/privacy' : '/'}
        className='flex-item'
        style={privacyPath ? color : null}
      >
        Privacy
      </Link>
      <Link
        to={validPassword ? '/done' : '/'}
        className='flex-item'
        style={donePath ? color : null}
      >
        Done
      </Link>
    </div>
  );
};

const color = {
  background: '#94bcf1',
  color: '#fff'
};

NavBar.propTypes = {
  path: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  path: state.path,
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar);
