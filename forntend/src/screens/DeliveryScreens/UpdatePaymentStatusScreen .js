import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  pendingpaymentstatus,
  updatePaymentStatus,
} from "../../actions/deliveryAction";

import DeliveryNavigation from "../../components/DeliveryNavigation";

const UpdatePaymentStatusScreen = (props) => {
  const [paymentDetails, setPaymentDetails] = useState([]);

  const pendingPaymentStatus = useSelector(
    (store) => store.pendingPaymentStatus
  );
  const { loading, response, error } = pendingPaymentStatus;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pendingpaymentstatus());
  }, []);

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    if (response && response.status === 200) {
      setPaymentDetails(response.data);
    } else if (error) {
      console.log(error);
      alert("error while getting sales report!!");
    }
  }, [loading, response, error]);

  const onUpdate = (paymentId) => {
    dispatch(updatePaymentStatus(paymentId));
    setPaymentDetails(paymentDetails.filter((p) => p.id !== paymentId));
  };

  return (
    <div>
      <DeliveryNavigation />
      <div className="custProd">
        <h1 className="title">Update Payment</h1>
        {paymentDetails.length !== 0 && (
          <div className="prodTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>DeliveryDate</th>
                  <th>BillAmount</th>
                </tr>
              </thead>
              <tbody>
                {paymentDetails.map((p) => (
                  <tr key={p.id} className="data">
                    <td>{p.orderId.userId.firstName}</td>
                    <td>{p.orderId.userId.lastName}</td>
                    <td>{p.orderId.deliveryDate}</td>
                    <td>{p.orderId.billTotal}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => onUpdate(p.id)}
                      >
                        {" "}
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {loading && <div>waiting for response</div>}
    </div>
  );
};

export default UpdatePaymentStatusScreen;
