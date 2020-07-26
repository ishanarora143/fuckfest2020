import { connect } from "react-redux";
import compose from 'recompose/compose';

import LoginView from "./Login.js";
import { loginUser, resetError } from "./LoginState";

export default compose(
  connect(
    state => ({
      isLoading: state.login.isLoading,
      isAuthenticated: state.login.isAuthenticated,
      error: state.login.error
    }),
    { loginUser, resetError }
  ),
)(LoginView);