import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import * as authActions from '../../store/actions/auth.actions';
import Spinner from '../Spinner/Spinner';
import { withRouter } from 'react-router';

import styles from './Authform.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email address')
    .required('Email is required'),
  password: Yup.string().min(8).required('Password is required'),
});

const AuthForm = (props) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const [isSignUp, setIsSignUp] = useState(true);

  const toggleAuth = () => {
    setIsSignUp((prevState) => !prevState);
  };

  console.log(props);

  return (
    <div className={styles.FormContainer}>
      <Formik
        initialValues={{ email: '', password: '', newsletter: false }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(authActions.auth(values.email, values.password, isSignUp));
          setSubmitting(false);
          resetForm();
          props.history.push({ pathname: '/dashboard' });
        }}>
        {({ values, isSubmitting, errors }) => {
          return (
            <>
              <h3 className={styles.Heading}>
                {isSignUp ? 'SIGN UP' : 'LOG IN'}
              </h3>
              {error && (
                <p
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    color: 'red',
                    background: 'rgb(255, 192, 192)',
                    padding: '15px 20px',
                    borderRadius: '200px',
                  }}>
                  {error}
                </p>
              )}
              {isLoading ? (
                <Spinner />
              ) : (
                <Form className={styles.Form}>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email address'
                    className={styles.Input}></Field>
                  <ErrorMessage name='email' component='div' />
                  <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                    className={styles.Input}></Field>
                  <ErrorMessage name='password' component='div' />
                  <label className={styles.NewsletterLabel}>
                    Join Our Newsletter
                    <Field
                      type='checkbox'
                      name='newsletter'
                      className={styles.Newsletter}
                      checked={values.newsletter}></Field>
                  </label>
                  <div className={styles.Actions}>
                    <button
                      className={styles.SubmitButton}
                      type='submit'
                      disabled={isSubmitting}>
                      Submit
                    </button>
                    <h3>OR</h3>
                    <button
                      className={styles.SwitchButton}
                      type='button'
                      onClick={toggleAuth}>
                      {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                  </div>
                </Form>
              )}
            </>
          );
        }}
      </Formik>
      <div>{userData}</div>
    </div>
  );
};

export default withRouter(AuthForm);
