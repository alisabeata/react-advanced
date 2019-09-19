import React from 'react';
import { Formik } from 'formik';

export const SignInForm = () => (
  <div>
    <h2>Sign In Form</h2>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
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
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);
