// @flow weak

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../../actions/viewAction';
import WinHistory             from './WinHistory';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // containers:
      ...viewsActions,
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(WinHistory);
