import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { salesReport } from "../../actions/adminActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";

const SalesReportScreen = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [orderDetails, setOrderDetails] = useState([]);

  const adminSalesReport = useSelector((store) => store.adminSalesReport);
  const { loading, response, error } = adminSalesReport;

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(salesReport(startDate, endDate));
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
  }, [loading, error, response]);

  return (
    <div>
      <AdminDeliveryNavigation />
      <div className="custProd">
        <h1 className="title">Sales Report</h1>
        <div>
          <div className="container">
            <lable>Start Date</lable>
            <input
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              type="date"
              className="form-input"
            />
          </div>
          <div
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
            className="container"
          >
            <label>End Date</label>
            <input type="date" className="form-input "></input>
            <button
              className="btn btn-success float-end"
              type="button"
              id="button-addon2"
              onClick={onSearch}
            >
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {loading && <div>waiting for response</div>}
      </div>
    </div>
  );
};

export default SalesReportScreen;
