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
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
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
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );

        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(
          authSuccess({
            tokenId: response.data?.idToken,
            userId: response.data?.localId,
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

export const checkAuthState = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return dispatch(authLogout());
    }

    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    const userId = localStorage.getItem('userId');
    if (expirationDate > new Date()) {
      dispatch(
        authSuccess({
          tokenId: token,
          userId,
        })
      );

      const logoutTime =
        (expirationDate.getTime() - new Date().getTime()) / 1000;

      dispatch(checkExpireToken(logoutTime));
    } else {
      dispatch(authLogout());
    }
  };
};
