import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { signUp } from '../../ducks/auth';

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .max(50, 'Password is too long')
    .required('Required')
});

const SignUpFormComponent = ({ signUp }) => (
  <div>
    <h2>Sign Up Form</h2>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, actions) => {
        const { email, password } = values;

        signUp(email, password);
        actions.setSubmitting(false);
      }}
      validationSchema={SignUpSchema}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <label>
            <p>Email</p>
            <input
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="email"
            />
          </label>
          {props.errors.email && props.touched.email && (
            <div style={{ color: 'red', fontSize: '11px' }}>
              {props.errors.email}
            </div>
          )}
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="password"
            />
          </label>
          {props.errors.password && props.touched.password && (
            <div style={{ color: 'red', fontSize: '11px' }}>
              {props.errors.password}
            </div>
          )}
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);

export const SignUpForm = connect(
  null,
  { signUp }
)(SignUpFormComponent);
