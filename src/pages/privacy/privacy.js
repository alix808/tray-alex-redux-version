import React, { useEffect } from 'react';
import CheckBox from '../../comps/check-box/checkBox';
import PrivacyButton from '../../comps/privacy-button/privacyButton';
import { connect } from 'react-redux';
import { validatePath } from '../../actions/pathActions';
import { setCheckBoxOne, setCheckBoxTwo } from '../../actions/authActions';
import './privacy.scss';

const Privacy = props => {
  const { validatePath, history, setCheckBoxOne, setCheckBoxTwo } = props;

  useEffect(() => {
    validatePath(history.location.pathname);
    // eslint-disable-next-line
  }, []);

  const stringOne = ' Recieve updates about Tray.io product by email';
  const stringTwo =
    ' Recieve communication by email for other products created by the Tray.io team';

  const onChangeOne = () => {
    setCheckBoxOne();
  };

  const onChangeTwo = () => {
    setCheckBoxTwo();
  };

  const onClick = () => {
    history.push('/done');
  };

  return (
    <div className='flex-container-privacy center'>
      <CheckBox string={stringOne} onChange={onChangeOne} />
      <CheckBox string={stringTwo} onChange={onChangeTwo} />
      <PrivacyButton onClick={onClick} />
    </div>
  );
};

const mapStateToProps = state => ({
  path: state.path
});

export default connect(
  mapStateToProps,
  {
    validatePath,
    setCheckBoxOne,
    setCheckBoxTwo
  }
)(Privacy);
