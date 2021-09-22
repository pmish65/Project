import axios from "axios";
import {
  DELIVERY_PENDING_DELIVERY_FAIL,
  DELIVERY_PENDING_DELIVERY_REQUEST,
  DELIVERY_PENDING_DELIVERY_SUCCESS,
  DELIVERY_STATUS_UPDATE_FAIL,
  DELIVERY_STATUS_UPDATE_REQUEST,
  DELIVERY_STATUS_UPDATE_SUCCESS,
  DELIVERY_VIEW_ORDERS_FAIL,
  DELIVERY_VIEW_ORDERS_REQUEST,
  DELIVERY_VIEW_ORDERS_SUCCESS,
  PAYMENT_PENDING_STATUS_FAIL,
  PAYMENT_PENDING_STATUS_REQUEST,
  PAYMENT_PENDING_STATUS_SUCCESS,
  PAYMENT_STATUS_UPDATE_FAIL,
  PAYMENT_STATUS_UPDATE_REQUEST,
  PAYMENT_STATUS_UPDATE_SUCCESS,
} from "../constants/deliveryConstants";

export const pendingdeliverystatus = () => {
  return (dispatch) => {
    dispatch({
      type: DELIVERY_PENDING_DELIVERY_REQUEST,
    });

    const url = "http://localhost:8080/delivery/status-list";

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
          type: DELIVERY_PENDING_DELIVERY_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELIVERY_PENDING_DELIVERY_FAIL,
          payload: error,
        });
      });
  };
};

export const updateDeliveryStatus = (orderId) => {
  return (dispatch) => {
    dispatch({
      type: DELIVERY_STATUS_UPDATE_REQUEST,
    });

    const url = "http://localhost:8080/delivery/update-status/" + orderId;

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
          type: DELIVERY_STATUS_UPDATE_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELIVERY_STATUS_UPDATE_FAIL,
          payload: error,
        });
      });
  };
};

export const pendingpaymentstatus = () => {
  return (dispatch) => {
    dispatch({
      type: PAYMENT_PENDING_STATUS_REQUEST,
    });

    const url = "http://localhost:8080/payment/status-list";

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
          type: PAYMENT_PENDING_STATUS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: PAYMENT_PENDING_STATUS_FAIL,
          payload: error,
        });
      });
  };
};

export const updatePaymentStatus = (paymentId) => {
  return (dispatch) => {
    dispatch({
      type: PAYMENT_STATUS_UPDATE_REQUEST,
    });

    const url = "http://localhost:8080/payment/update-status/" + paymentId;

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
          type: PAYMENT_STATUS_UPDATE_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: PAYMENT_STATUS_UPDATE_FAIL,
          payload: error,
        });
      });
  };
};

export const getOrderDetails = (startDate, endDate) => {
  return (dispatch) => {
    dispatch({
      type: DELIVERY_VIEW_ORDERS_REQUEST,
    });

    const url =
      "http://localhost:8080/delivery/details?startDate=" +
      startDate +
      "&endDate=" +
      endDate;

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
          type: DELIVERY_VIEW_ORDERS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELIVERY_VIEW_ORDERS_FAIL,
          payload: error,
        });
      });
  };
};
