import React, { Component } from 'react';
import { SignInForm } from '../auth/SignInForm';
import { SignUpForm } from '../auth/SignUpForm';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../ducks/auth';

class AuthPageComponent extends Component {
  handleSignIn = val => console.log('------', val);
  handleSignUp = ({ email, password }) => this.props.signUp(email, password);

  render() {
    return (
      <div>
        <h1>AuthPage</h1>
        <NavLink to="/auth/signin" activeStyle={{ color: 'red' }}>
          sign in
        </NavLink>
        <NavLink to="/auth/signup" activeStyle={{ color: 'red' }}>
          sign up
        </NavLink>
        <Route
          path="/auth/signin"
          render={() => <SignInForm onSubmit={this.handleSignIn} />}
        />
        <Route
          path="/auth/signup"
          render={() => <SignUpForm onSubmit={this.handleSignUP} />}
        />
      </div>
    );
  }
}

export const AuthPage = connect(
  null,
  { signUp }
)(AuthPageComponent);
