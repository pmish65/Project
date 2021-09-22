import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentStatus } from "../../actions/adminActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";

const PaymentStatusScreen = (props) => {
  const [paymentDetails, setPaymentDetails] = useState([]);

  const paymentStatusStore = useSelector((store) => store.paymentStatus);
  const { loading, response, error } = paymentStatusStore;

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(paymentStatus());
  };

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

  return (
    <div>
      <AdminDeliveryNavigation />
      <div className="custProd">
        <h1 className="title">Payment Status</h1>
        <div className="mb-3">
          <button className="btn btn-success float-end" onClick={onSearch}>
            Search
          </button>
        </div>
        {paymentDetails.length !== 0 && (
          <div className="prodTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>DeliveryDate</th>
                  <th>Type</th>
                  <th>TotalAmount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentDetails.map((p) => (
                  <tr key={p.id} className="data">
                    <td>{p.orderId.userId.firstName}</td>
                    <td>{p.orderId.userId.lastName}</td>
                    <td>{p.orderId.deliveryDate}</td>
                    <td>{p.type}</td>
                    <td>{p.orderId.billTotal}</td>
                    <td>{p.paymentStatus === false ? "Unpaid" : "Paid"}</td>
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

export default PaymentStatusScreen;
