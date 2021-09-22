import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeliveryNavigation from "../../components/DeliveryNavigation";

const DeliveryScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { response } = userSignin;

  return (
    <div>
      <DeliveryNavigation />
      <h1 className="title">Welcome {response.data.user.firstName}</h1>
      <hr />
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link to="/order/details">
          <span className="btn btn-primary form-control btn-lg">
            View Order Details
          </span>
        </Link>
        <Link to="/update/delivery-status">
          <span className="btn btn-primary form-control btn-lg">
            Update Delivery Status
          </span>
        </Link>
        <Link to="/update/payment-status">
          <span className="btn btn-primary form-control btn-lg">
            Update Payment Status
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DeliveryScreen;
