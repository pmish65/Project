import axios from "axios";
import {
  USER_EDIT_PASSWORD_FAIL,
  USER_EDIT_PASSWORD_REQUEST,
  USER_EDIT_PASSWORD_SUCCESS,
  USER_EDIT_PROFILE_FAIL,
  USER_EDIT_PROFILE_REQUEST,
  USER_EDIT_PROFILE_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_GET_ORDER_FAIL,
  USER_GET_ORDER_REQUEST,
  USER_GET_ORDER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_VIEW_PRODUCTS_FAIL,
  USER_VIEW_PRODUCTS_REQUEST,
  USER_VIEW_PRODUCTS_SUCCESS,
} from "../constants/userConstants";

export const signup = (
  firstName,
  lastName,
  age,
  contact,
  email,
  password,
  confirmPassword,
  role,
  houseNo,
  street,
  pinCode,
  state,
  city
) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      firstName,
      lastName,
      age,
      contact,
      email,
      password,
      confirmPassword,
      role,
      houseNo,
      street,
      pinCode,
      state,
      city,
    };

    const url = "http://localhost:8080/user/signup";

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};

export const signin = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      password,
    };

    const url = "http://localhost:8080/user/signin";

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};

export const editprofile = (id, firstName, lastName, age, contact, email) => {
  return (dispatch) => {
    dispatch({
      type: USER_EDIT_PROFILE_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    const body = {
      id,
      firstName,
      lastName,
      age,
      contact,
      email,
    };

    const url = "http://localhost:8080/user/edit_profile";

    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_EDIT_PROFILE_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_EDIT_PROFILE_FAIL,
          payload: error,
        });
      });
  };
};

export const editpassword = (
  email,
  oldPassword,
  newPassword,
  confirmPassword
) => {
  return (dispatch) => {
    dispatch({
      type: USER_EDIT_PASSWORD_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    const body = {
      email,
      oldPassword,
      newPassword,
      confirmPassword,
    };

    const url = "http://localhost:8080/user/edit_password";

    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_EDIT_PASSWORD_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_EDIT_PASSWORD_FAIL,
          payload: error,
        });
      });
  };
};

export const viewproducts = (prodName) => {
  return (dispatch) => {
    dispatch({
      type: USER_VIEW_PRODUCTS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    const url = "http://localhost:8080/admin/product-list?keyword=" + prodName;

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: USER_VIEW_PRODUCTS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_VIEW_PRODUCTS_FAIL,
          payload: error,
        });
      });
  };
};

export const getorder = (userId) => {
  return (dispatch) => {
    dispatch({
      type: USER_GET_ORDER_REQUEST,
    });

    const url = "http://localhost:8080/user/order/" + userId;

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: USER_GET_ORDER_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_GET_ORDER_FAIL,
          payload: error,
        });
      });
  };
};

export const forgotpassword = (email, newPassword, confirmPassword) => {
  return (dispatch) => {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      email,
      newPassword,
      confirmPassword,
    };

    const url = "http://localhost:8080/user/forgot_password";

    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_FORGOT_PASSWORD_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_FORGOT_PASSWORD_FAIL,
          payload: error,
        });
      });
  };
};
