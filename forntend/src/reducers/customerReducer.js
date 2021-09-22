import {
  CUSTOMER_ADD_TO_CART_FAIL,
  CUSTOMER_ADD_TO_CART_REQUEST,
  CUSTOMER_ADD_TO_CART_SUCCESS,
  CUSTOMER_CHECKOUT_FAIL,
  CUSTOMER_CHECKOUT_REQUEST,
  CUSTOMER_CHECKOUT_SUCCESS,
  CUSTOMER_GET_CART_FAIL,
  CUSTOMER_GET_CART_REQUEST,
  CUSTOMER_GET_CART_SUCCESS,
  CUSTOMER_PAYMENT_FAIL,
  CUSTOMER_PAYMENT_REQUEST,
  CUSTOMER_PAYMENT_SUCCESS,
  CUSTOMER_REMOVE_CART_FAIL,
  CUSTOMER_REMOVE_CART_REQUEST,
  CUSTOMER_REMOVE_CART_SUCCESS,
} from "../constants/customerConstants";

export const custAddToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ADD_TO_CART_REQUEST:
      return { loading: true };
    case CUSTOMER_ADD_TO_CART_SUCCESS:
      return { loading: false, response: action.payload };
    case CUSTOMER_ADD_TO_CART_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const custGetCartReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_GET_CART_REQUEST:
      return { loading: true };
    case CUSTOMER_GET_CART_SUCCESS:
      return { loading: false, response: action.payload };
    case CUSTOMER_GET_CART_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const custRemoveCartItemReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_REMOVE_CART_REQUEST:
      return { loading: true };
    case CUSTOMER_REMOVE_CART_SUCCESS:
      return { loading: false, response: action.payload };
    case CUSTOMER_REMOVE_CART_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const custCheckoutReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_CHECKOUT_REQUEST:
      return { loading: true };
    case CUSTOMER_CHECKOUT_SUCCESS:
      return { loading: false, response: action.payload };
    case CUSTOMER_CHECKOUT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const makePaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_PAYMENT_REQUEST:
      return { loading: true };
    case CUSTOMER_PAYMENT_SUCCESS:
      return { loading: false, response: action.payload };
    case CUSTOMER_PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
