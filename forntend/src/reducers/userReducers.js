import {
  USER_EDIT_PASSWORD_FAIL,
  USER_EDIT_PASSWORD_REQUEST,
  USER_EDIT_PASSWORD_SUCCESS,
  USER_EDIT_PROFILE_FAIL,
  USER_EDIT_PROFILE_REQUEST,
  USER_EDIT_PROFILE_SUCCESS,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_GET_ORDER_FAIL,
  USER_GET_ORDER_REQUEST,
  USER_GET_ORDER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_VIEW_PRODUCTS_FAIL,
  USER_VIEW_PRODUCTS_REQUEST,
  USER_VIEW_PRODUCTS_SUCCESS,
} from "../constants/userConstants";

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userEditProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_PROFILE_REQUEST:
      return { loading: true };
    case USER_EDIT_PROFILE_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_EDIT_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userEditPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_PASSWORD_REQUEST:
      return { loading: true };
    case USER_EDIT_PASSWORD_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_EDIT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userViewProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_VIEW_PRODUCTS_REQUEST:
      return { loading: true };
    case USER_VIEW_PRODUCTS_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_VIEW_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userGetOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_ORDER_REQUEST:
      return { loading: true };
    case USER_GET_ORDER_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_GET_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const forgotpasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case USER_FORGOT_PASSWORD_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_GET_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
