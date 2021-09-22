import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  userSignupReducer,
  userSigninReducer,
  userEditProfileReducer,
  userEditPasswordReducer,
  userViewProductsReducer,
  userGetOrderReducer,
  forgotpasswordReducer,
} from "./reducers/userReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  salesReportReducer,
  userAddDeliveryPersonReducer,
  userAddProductReducer,
  userEditProductReducer,
  pendingDeliveriesReducer,
  paymentStatusReducer,
} from "./reducers/adminReducer";
import {
  custAddToCartReducer,
  custCheckoutReducer,
  custGetCartReducer,
  makePaymentReducer,
} from "./reducers/customerReducer";
import {
  getordersReducer,
  pendingDeliveryStatusReducer,
  pendingPaymentStatusReducer,
  updateDeliveryStatusReducer,
  updatePaymentStatusReducer,
} from "./reducers/deliveryReducer";

// combined reducers
const reducers = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  userEditProfile: userEditProfileReducer,
  userEditPassword: userEditPasswordReducer,
  userAddProduct: userAddProductReducer,
  userViewProduct: userViewProductsReducer,
  userEditProduct: userEditProductReducer,
  userAddDeliveryPerson: userAddDeliveryPersonReducer,
  customerAddToCart: custAddToCartReducer,
  customerGetCartList: custGetCartReducer,
  custCheckout: custCheckoutReducer,
  adminSalesReport: salesReportReducer,
  adminpendingdelivery: pendingDeliveriesReducer,
  pendingDeliveryStatus: pendingDeliveryStatusReducer,
  udtDeliveryStatus: updateDeliveryStatusReducer,
  userGetOrder: userGetOrderReducer,
  makePayment: makePaymentReducer,
  paymentStatus: paymentStatusReducer,
  pendingPaymentStatus: pendingPaymentStatusReducer,
  paymentStatusUpdate: updatePaymentStatusReducer,
  OrderDetails: getordersReducer,
  forgotPassword: forgotpasswordReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
