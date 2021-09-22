import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../actions/deliveryAction";
import DeliveryNavigation from "../../components/DeliveryNavigation";

const ViewOrderScreen = (props) => {
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [orders, setOrders] = useState([]);

  const OrderDetails = useSelector((store) => store.OrderDetails);
  const { loading, response, error } = OrderDetails;

  const dispatch = useDispatch();

  const onSearch = () => {
    console.log("startDate: ", startdate);
    console.log("endDate: ", enddate);
    dispatch(getOrderDetails(startdate, enddate));
  };

  useEffect(() => {
    if (response && response.status === 200) {
      setOrders(response.data);
    } else if (error) {
      console.log(error);
      alert("product Not Found!!");
    }
  }, [loading, error, response]);

  return (
    <div>
      <DeliveryNavigation />
      <div className="custProd">
        <h1 className="title">Pending Orders</h1>
        <div>
          <label className="lbl">
            <h4>Start Date</h4>
          </label>
          <input
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            className="sDate"
            type="date"
            placeholder="Product Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />

          <label className="lbl">
            <h4>End Date</h4>
          </label>
          <input
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            className="eDate"
            type="date"
            placeholder="Product Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
        <div>
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={onSearch}
          >
            Search
          </button>
        </div>
        {orders.length !== 0 && (
          <div className="prodTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>contact</th>
                  <th>OrderDate</th>
                  <th>BillAmount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((p) => (
                  <tr key={p.id} className="data">
                    <td>{p.userId.firstName}</td>
                    <td>{p.userId.lastName}</td>
                    <td>{p.userId.contact}</td>
                    <td>{p.deliveryDate}</td>
                    <td>{p.billTotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewOrderScreen;
