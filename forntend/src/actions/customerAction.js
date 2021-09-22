import axios from "axios";
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

export const addtocart = (userId, prodId, prodQty) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_ADD_TO_CART_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    const body = {
      userId,
      prodId,
      prodQty,
    };

    const url = "http://localhost:8080/cart/add-product";

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_ADD_TO_CART_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_ADD_TO_CART_FAIL,
          payload: error,
        });
      });
  };
};

export const getcartlist = (userId) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_GET_CART_REQUEST,
    });

    const url = "http://localhost:8080/cart/list/" + userId;

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };
    
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_GET_CART_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_GET_CART_FAIL,
          payload: error,
        });
      });
  };
};

export const removecartitem = (itemId) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_REMOVE_CART_REQUEST,
    });

    const url = "http://localhost:8080/cart/remove-product/" + itemId;

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    axios
      .delete(url, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_REMOVE_CART_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_REMOVE_CART_FAIL,
          payload: error,
        });
      });
  };
};

export const checkout = (userId) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_CHECKOUT_REQUEST,
    });

    const url = "http://localhost:8080/cart/checkout/" + userId;

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_CHECKOUT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_CHECKOUT_FAIL,
          payload: error,
        });
      });
  };
};

export const makepayment = (orderId, type) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_PAYMENT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    const body = {
      orderId,
      type,
    };

    const url = "http://localhost:8080/customer/payment";

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_PAYMENT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_PAYMENT_FAIL,
          payload: error,
        });
      });
  };
};
