import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pendingdeliveries } from "../../actions/adminActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";

const PendingDeliveryStatusScreen = (props) => {
  const [orderDetails, setOrderDetails] = useState([]);

  const adminpendingdelivery = useSelector(
    (store) => store.adminpendingdelivery
  );
  const { loading, response, error } = adminpendingdelivery;

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(pendingdeliveries());
  };

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

  return (
    <div>
      <AdminDeliveryNavigation />
      <div className="custProd">
        <h1 className="title">Delivery Status</h1>
        <div className="mb-3">
          <button className="btn btn-success float-end" onClick={onSearch}>
            Search
          </button>
        </div>
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
                  <th>Status</th>
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
                      {p.deliveryStatus === false ? "In Process" : "Delivered"}
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

export default PendingDeliveryStatusScreen;
