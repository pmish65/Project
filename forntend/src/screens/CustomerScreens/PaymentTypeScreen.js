import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makepayment } from "../../actions/customerAction";
import { getorder } from "../../actions/userActions";
import Navigation from "../../components/Navigation";
import store from "../../store";

const PaymentTypeScreen = (props) => {
  const userId = store.getState().userSignin.response.data.user.id;
  const makePayment = useSelector((store) => store.makePayment);
  const { loading, response, error } = makePayment;
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getorder(userId));
    }, 1000);
    if (response && response.status === 200) {
    } else if (error) {
      console.log(error);
      alert("error in cart list Found!!");
    }
  }, []);

  console.log("orderID: ", type);
  const onProceed = () => {
    dispatch(makepayment(store.getState().userGetOrder.response.data.id, type));
    if (type === "COD") {
      props.history.push("/order/success");
    } else if (type === "CARD") {
      props.history.push("/payment");
    }
  };

  return (
    <div>
      <Navigation />
      <div className="payType">
        <div className="signin_header">
          <h1>Payment Type</h1>
        </div>
        <div className="mb-3">
          <label className="form-label type">Please select Payment Type</label>
          <div className="select-pay">
            <select
              onChange={(e) => {
                setType(e.target.value);
              }}
              className="form-control"
            >
              <option value="">--Select Payment Type--</option>
              <option value="COD">COD</option>
              <option value="CARD">CARD</option>
            </select>
          </div>
        </div>
        <div className="proceed">
          <button
            className="btn btn-primary btn-signin btn-lg"
            onClick={onProceed}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTypeScreen;
