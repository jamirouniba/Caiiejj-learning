import {
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  EDIT_USER_FAIL,
  EDIT_SUCCESS,
  EDIT_FAIL,
  EDIT_USER_SUCCESS, DELETE_SUCCESS
} from '../actions/types';

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  profile: null,
  auth_token: localStorage.getItem('auth_token')
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVATION_SUCCESS:
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      console.log("reducer", action.payload);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        profile: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
       localStorage.removeItem('auth_token');
      localStorage.setItem('auth_token', action.payload.auth_token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        ...action.payload
      };
    case AUTH_ERROR:
    case ACTIVATION_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case DELETE_SUCCESS:
    case LOGOUT_SUCCESS: // added
      localStorage.removeItem('auth_token');
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        profile: null,
        auth_token: null
      };
    default:
      return state;
  }
}