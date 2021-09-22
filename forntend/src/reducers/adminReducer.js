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
  USER_EDIT_PRODUCT_REQUEST,
  USER_EDIT_PRODUCT_SUCCESS,
} from "../constants/adminConstants";

export const userAddProductReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_PRODUCT_REQUEST:
      return { loading: true };
    case USER_ADD_PRODUCT_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDeleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_PRODUCT_REQUEST:
      return { loading: true };
    case USER_DELETE_PRODUCT_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userEditProductReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EDIT_PRODUCT_REQUEST:
      return { loading: true };
    case USER_EDIT_PRODUCT_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_EDIT_PRODUCT_SUCCESS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userAddDeliveryPersonReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_DELIVERY_REQUEST:
      return { loading: true };
    case USER_ADD_DELIVERY_SUCCESS:
      return { loading: false, response: action.payload };
    case USER_ADD_DELIVERY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const salesReportReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SALES_REPORT_REQUEST:
      return { loading: true };
    case ADMIN_SALES_REPORT_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_SALES_REPORT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pendingDeliveriesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_PENDING_DELIVERY_REQUEST:
      return { loading: true };
    case ADMIN_PENDING_DELIVERY_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_PENDING_DELIVERY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const paymentStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_PAYMENT_STATUS_REQUEST:
      return { loading: true };
    case ADMIN_PAYMENT_STATUS_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_PAYMENT_STATUS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
