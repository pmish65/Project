import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  checkout,
  getcartlist,
  removecartitem,
} from "../../actions/customerAction";
import Navigation from "../../components/Navigation";
import store from "../../store";

const CartScreen = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState([]);
  const [billTotal, setBillTotal] = useState("");
  const userId = store.getState().userSignin.response.data.user.id;
  const customerGetCartList = useSelector((store) => store.customerGetCartList);
  const { loading, response, error } = customerGetCartList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcartlist(userId));
  }, []);

  useEffect(() => {
    if (response && response.status === 200) {
      setItems(response.data);
      setTotal(items.map((t) => t.prodTotal));
      setBillTotal(Math.round(total.reduce((a, b) => a + b, 0)));
    } else if (error) {
      console.log(error);
      alert("error in cart list Found!!");
    }
  }, [loading, response, error]);

  useEffect(() => {}, []);

  function onCheckout() {
    dispatch(checkout(userId));
  }

  function onDelete(id) {
    setItems(items.filter((item) => item.id !== id));
    dispatch(removecartitem(id));
  }

  return (
    <div>
      <Navigation />
      <div className="custProd">
        <h1 className="title">Cart</h1>
        {items.length !== 0 && (
          <div className="prodTable">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ProductName</th>
                  <th>Manufacturer</th>
                  <th>ExpiryDate</th>
                  <th>Packing</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Qty</th>
                </tr>
              </thead>
              <tbody>
                {items.map((i) => (
                  <tr key={i.id} className="data">
                    <td>{i.prodId.prodName}</td>
                    <td>{i.prodId.manufacturer}</td>
                    <td>{i.prodId.expiryDate}</td>
                    <td>{i.prodId.packing}</td>
                    <td>{i.prodId.type}</td>
                    <td>{i.prodId.price}</td>
                    <td>{i.prodQty}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(i.id)}
                      >
                        {" "}
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              Total:{" "}
              <input
                className="form-input"
                type="number"
                value={billTotal}
                readOnly
              />
            </div>
            <div className="float-end">
              <Link to="/order-details">
                <span
                  class="form-control btn btn-primary btn-lg"
                  onClick={onCheckout}
                >
                  Checkout
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
