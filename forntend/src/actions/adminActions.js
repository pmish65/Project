import axios from "axios";
import {
  ADMIN_PAYMENT_STATUS_FAIL,
  ADMIN_PAYMENT_STATUS_REQUEST,
  ADMIN_PAYMENT_STATUS_SUCCESS,
  ADMIN_PENDING_DELIVERY_FAIL,
  ADMIN_PENDING_DELIVERY_REQUEST,
  ADMIN_PENDING_DELIVERY_SUCCESS,
  ADMIN_SALES_REPORT_FAIL,
  ADMIN_SALES_REPORT_REQUEST,
  ADMIN_SALES_REPORT_SUCCESS,
  USER_ADD_DELIVERY_FAIL,
  USER_ADD_DELIVERY_REQUEST,
  USER_ADD_DELIVERY_SUCCESS,
  USER_ADD_PRODUCT_FAIL,
  USER_ADD_PRODUCT_REQUEST,
  USER_ADD_PRODUCT_SUCCESS,
  USER_DELETE_PRODUCT_FAIL,
  USER_DELETE_PRODUCT_REQUEST,
  USER_DELETE_PRODUCT_SUCCESS,
  USER_EDIT_PRODUCT_FAIL,
  USER_EDIT_PRODUCT_REQUEST,
  USER_EDIT_PRODUCT_SUCCESS,
} from "../constants/adminConstants";

export const addproduct = (
  prodName,
  manufacturer,
  expiryDate,
  packing,
  type,
  price
) => {
  return (dispatch) => {
    dispatch({
      type: USER_ADD_PRODUCT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    const body = {
      prodName,
      manufacturer,
      expiryDate,
      packing,
      type,
      price,
    };

    const url = "http://localhost:8080/admin/add-product";

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_ADD_PRODUCT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_ADD_PRODUCT_FAIL,
          payload: error,
        });
      });
  };
};

export const deleteproduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: USER_DELETE_PRODUCT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    const url = "http://localhost:8080/product/delete/" + id;

    axios
      .delete(url, header)
      .then((response) => {
        dispatch({
          type: USER_DELETE_PRODUCT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_DELETE_PRODUCT_FAIL,
          payload: error,
        });
      });
  };
};

export const editproduct = (id, packing, price) => {
  return (dispatch) => {
    dispatch({
      type: USER_EDIT_PRODUCT_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    const body = { id, packing, price };

    const url = "http://localhost:8080/admin/edit-product";

    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_EDIT_PRODUCT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_EDIT_PRODUCT_FAIL,
          payload: error,
        });
      });
  };
};

export const adddeliveryperson = (
  firstName,
  lastName,
  age,
  contact,
  email,
  password,
  confirmPassword,
  houseNo,
  street,
  pinCode,
  state,
  city
) => {
  return (dispatch) => {
    dispatch({
      type: USER_ADD_DELIVERY_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
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
      houseNo,
      street,
      pinCode,
      state,
      city,
    };

    const url = "http://localhost:8080/admin/add-delivery-person";

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_ADD_DELIVERY_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: USER_ADD_DELIVERY_FAIL,
          payload: error,
        });
      });
  };
};

export const salesReport = (startDate, endDate) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_SALES_REPORT_REQUEST,
    });

    const url =
      "http://localhost:8080/admin/sales-report?startDate=" +
      startDate +
      "&endDate=" +
      endDate;

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
          type: ADMIN_SALES_REPORT_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_SALES_REPORT_FAIL,
          payload: error,
        });
      });
  };
};

export const pendingdeliveries = () => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_PENDING_DELIVERY_REQUEST,
    });

    const url = "http://localhost:8080/admin/order-status";

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
          type: ADMIN_PENDING_DELIVERY_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_PENDING_DELIVERY_FAIL,
          payload: error,
        });
      });
  };
};

export const paymentStatus = () => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_PAYMENT_STATUS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem('token')}`
      },
    };

    const url = "http://localhost:8080/admin/payment-status";

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: ADMIN_PAYMENT_STATUS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_PAYMENT_STATUS_FAIL,
          payload: error,
        });
      });
  };
};
