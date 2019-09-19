import React, { Component } from 'react';
import { SignInForm } from '../auth/SignInForm';
import { SignUpForm } from '../auth/SignUpForm';
import { Route, NavLink } from 'react-router-dom';

export class AuthPage extends Component {
  handleSignIn = val => console.log('------', val);
  handleSignUp = val => console.log('------', val);

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
