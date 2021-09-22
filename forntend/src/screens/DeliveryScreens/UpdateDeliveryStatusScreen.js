import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  pendingdeliverystatus,
  updateDeliveryStatus,
} from "../../actions/deliveryAction";
import DeliveryNavigation from "../../components/DeliveryNavigation";

const UpdateDeliveryStatusScreen = (props) => {
  const [orderDetails, setOrderDetails] = useState([]);

  const pendingDeliveryStatus = useSelector(
    (store) => store.pendingDeliveryStatus
  );
  const { loading, response, error } = pendingDeliveryStatus;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pendingdeliverystatus());
  }, []);

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    if (response && response.status === 200) {
      setOrderDetails(response.data);
    } else if (error) {
      console.log(error);
      alert("error while getting sales report!!");
    }
  }, [loading, response, error]);

  function onUpdate(orderId) {
    dispatch(updateDeliveryStatus(orderId));
    setOrderDetails(orderDetails.filter((order) => order.id !== orderId));
  }

  return (
    <div>
      <DeliveryNavigation />
      <div className="custProd">
        <h1 className="title">Update Delivery</h1>
        {orderDetails.length !== 0 && (
          <div className="prodTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>OrderDate</th>
                  <th>DeliveryDate</th>
                  <th>TotalAmount</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((p) => (
                  <tr key={p.id} className="data">
                    <td>{p.userId.firstName}</td>
                    <td>{p.userId.lastName}</td>
                    <td>{p.orderDate}</td>
                    <td>{p.deliveryDate}</td>
                    <td>{p.billTotal}</td>
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

export default UpdateDeliveryStatusScreen;
