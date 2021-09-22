import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupScreen from "./screens/CommonScreens/SignupScreen";
import HomeScreen from "./screens/CustomerScreens/HomeScreen";
import AboutScreen from "./screens/CustomerScreens/AboutScreen";
import ReachUsScreen from "./screens/CustomerScreens/ReachUsScreen";
import SigninScreen from "./screens/CommonScreens/SigninScreen";
import AdminScreen from "./screens/AdminScreens/AdminScreen";
import DeliveryScreen from "./screens/DeliveryScreens/DeliveryScreen";
import EditProfileScreen from "./screens/CommonScreens/EditProfileScreen";
import EditPasswordScreen from "./screens/CommonScreens/EditPasswordScreen";
import AddProductScreen from "./screens/AdminScreens/AddProductScreen";
import ViewProductsScreen from "./screens/AdminScreens/ViewProductsScreen";
import EditProductScreen from "./screens/AdminScreens/EditProductScreen";
import AddDeliveryScreen from "./screens/AdminScreens/AddDeliveryPersonScreen";
import CustomerProductsScreen from "./screens/CustomerScreens/custProductsScreen";
import CartScreen from "./screens/CustomerScreens/CartScreen";
import PaymentTypeScreen from "./screens/CustomerScreens/PaymentTypeScreen";
import SalesReportScreen from "./screens/AdminScreens/SalesReportScreen";
import PendingDeliveryStatusScreen from "./screens/AdminScreens/PendingDeliveryStatusScreen";
import UpdateDeliveryStatusScreen from "./screens/DeliveryScreens/UpdateDeliveryStatusScreen";
import PaymentScreen from "./screens/CustomerScreens/PaymentScreen";
import PaymentSuccessScreen from "./screens/CustomerScreens/PaymentSuccessScreen";
import PaymentStatusScreen from "./screens/AdminScreens/PaymentStatus";
import UpdatePaymentStatusScreen from "./screens/DeliveryScreens/UpdatePaymentStatusScreen ";
import ViewOrderScreen from "./screens/DeliveryScreens/ViewOrdersScreen";
import OrderSuccessScreen from "./screens/CustomerScreens/OrderSuccessScreen";
import ForgotPasswordScreen from "./screens/CommonScreens/ForgotPasswordScreen";
import InitialScreen from "./screens/CommonScreens/InitialScreen";

const App = () => {
  return (
    <div>
      <div className="content-container">
        <Router>
          <Switch>
            <Route path="/" exact component={InitialScreen} />
            <Route path="/signup" component={SignupScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/home" component={HomeScreen} />
            <Route path="/about-us" component={AboutScreen} />
            <Route path="/reach-us" component={ReachUsScreen} />
            <Route path="/admin" component={AdminScreen} />
            <Route path="/delivery" component={DeliveryScreen} />
            <Route path="/edit-profile" component={EditProfileScreen} />
            <Route path="/edit-password" component={EditPasswordScreen} />
            <Route path="/add-product" component={AddProductScreen} />
            <Route path="/view-products" component={ViewProductsScreen} />
            <Route path="/edit-product" component={EditProductScreen} />
            <Route path="/add-delivery" component={AddDeliveryScreen} />
            <Route path="/products" component={CustomerProductsScreen} />
            <Route path="/cart/list" component={CartScreen} />
            <Route path="/order-details" component={PaymentTypeScreen} />
            <Route path="/sales-report" component={SalesReportScreen} />
            <Route
              path="/delivery-pending"
              component={PendingDeliveryStatusScreen}
            />
            <Route
              path="/update/delivery-status"
              component={UpdateDeliveryStatusScreen}
            />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/payment-success" component={PaymentSuccessScreen} />
            <Route path="/payment-status" component={PaymentStatusScreen} />
            <Route
              path="/update/payment-status"
              component={UpdatePaymentStatusScreen}
            />
            <Route path="/order/details" component={ViewOrderScreen} />
            <Route path="/order/success" component={OrderSuccessScreen} />
            <Route path="/forgot-password" component={ForgotPasswordScreen} />
          </Switch>
        </Router>
      </div>
      <footer className="footer--pin">
        &copy; Copyright 2021
        Created by Kaustubh, Adarsh, Ravi, Piyush, Rupesh
      </footer>
    </div>
  );
};

export default App;
