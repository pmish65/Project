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

export const pendingDeliveryStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_PENDING_DELIVERY_REQUEST:
      return { loading: true };
    case DELIVERY_PENDING_DELIVERY_SUCCESS:
      return { loading: false, response: action.payload };
    case DELIVERY_PENDING_DELIVERY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateDeliveryStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_STATUS_UPDATE_REQUEST:
      return { loading: true };
    case DELIVERY_STATUS_UPDATE_SUCCESS:
      return { loading: false, response: action.payload };
    case DELIVERY_STATUS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pendingPaymentStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_PENDING_STATUS_REQUEST:
      return { loading: true };
    case PAYMENT_PENDING_STATUS_SUCCESS:
      return { loading: false, response: action.payload };
    case PAYMENT_PENDING_STATUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updatePaymentStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_STATUS_UPDATE_REQUEST:
      return { loading: true };
    case PAYMENT_STATUS_UPDATE_SUCCESS:
      return { loading: false, response: action.payload };
    case PAYMENT_STATUS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getordersReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_VIEW_ORDERS_REQUEST:
      return { loading: true };
    case DELIVERY_VIEW_ORDERS_SUCCESS:
      return { loading: false, response: action.payload };
    case DELIVERY_VIEW_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
