import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
} from '../actions/actionTypes';

const intialState = {
  isLoading: false,
  tokenID: null,
  userID: null,
  userData: null,
  error: null,
};

const reducer = (state = intialState, action) => {
  const { type: actionType, payload } = action;

  switch (actionType) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        tokenID: payload.tokenId,
        userID: payload.userId,
        userData: payload.userData,
        error: null,
        isLoading: false,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        tokenID: null,
        userID: null,
      };
    default:
      return { state };
  }
};

export default reducer;
