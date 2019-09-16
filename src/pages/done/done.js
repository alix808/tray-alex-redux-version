import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { validatePath } from '../../actions/pathActions';
import { useSpring, animated } from 'react-spring';
import tick from '../../img/tick.png';
import './done.scss';

const Done = props => {
  const { validatePath, history } = props;

  useEffect(() => {
    validatePath(history.location.pathname);
    // eslint-disable-next-line
  }, []);

  const string =
    'Please verify your email address, you should have recieved an email from us already!';

  const springProps = useSpring({ marginTop: 0, from: { marginTop: -4000 } });

  return (
    <animated.div style={springProps} className='center-done'>
      <img src={tick} alt='' className='tick' />
      <h2>{string}</h2>
    </animated.div>
  );
};

const mapStateToProps = state => ({
  path: state.path
});

export default connect(
  mapStateToProps,
  {
    validatePath
  }
)(Done);
