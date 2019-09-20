import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Password is too short')
    .max(50, 'Password is too long')
    .required('Required')
});

export const SignUpForm = () => (
  <div>
    <h2>Sign Up Form</h2>
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
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
          {props.errors.email && props.touched.email && (
            <p>{props.errors.email}</p>
          )}
          {props.errors.password && props.touched.password && (
            <p>{props.errors.password}</p>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
    />
  </div>
);
