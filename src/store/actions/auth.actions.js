import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
} from './actionTypes';
import axios from 'axios';

export const authRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    payload: authData,
  };
};

export const authFailure = (error) => {
  return {
    type: AUTH_FAILURE,
    payload: error,
  };
};

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const checkExpireToken = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, signUp) => {
  return (dispatch) => {
    dispatch(authRequest());

    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBonCWUmYGtLm20LIY4A78Z1l0nqXk6wA';

    if (!signUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBonCWUmYGtLm20LIY4A78Z1l0nqXk6wA';
    }

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response.data);
        dispatch(
          authSuccess({
            tokenId: response.data?.idToken,
            userId: response.data?.localId,
            userData: response.data?.email,
          })
        );
        dispatch(checkExpireToken(response.data?.expiresIn));
      })
      .catch(({ response }) => {
        console.log('[Error]', response.data.error.message);
        dispatch(authFailure(response.data.error.message));
      });
  };
};
