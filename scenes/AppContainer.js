import { connect } from 'react-redux';

import AppNav from './AppNav.js';

export default connect(
    state => ({
      isAuthenticated: state.login.isAuthenticated,
    })
  )(AppNav)