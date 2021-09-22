import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../actions/customerAction";
import { viewproducts } from "../../actions/userActions";
import Navigation from "../../components/Navigation";
import store from "../../store";

const CustomerProductsScreen = (props) => {
  const [prodName, setProdName] = useState("");
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState("");

  const userId = store.getState().userSignin.response.data.user.id;
  const userViewProduct = useSelector((store) => store.userViewProduct);
  const { loading, response, error } = userViewProduct;

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(viewproducts(prodName));
  };

  function onAddToCart(id) {
    console.log("UserID: ", userId);
    console.log("ProdId: ", id);
    dispatch(addtocart(userId, id, qty));
  }

  useEffect(() => {
    if (response && response.status === 200) {
      setProducts(response.data);
    } else if (error) {
      console.log(error);
      alert("product Not Found!!");
    }
  }, [loading, error, response]);

  return (
    <div>
      <Navigation />
      <div className="custProd">
        <h1 className="title">Products</h1>
        <div className="mb-3">
          <input
            onChange={(e) => {
              setProdName(e.target.value);
            }}
            type="text"
            className="form-control search"
            placeholder="Product Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-success float-end" onClick={onSearch}>
            Search
          </button>
        </div>
        {products.length !== 0 && (
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
                {products.map((p) => (
                  <tr key={p.id} className="data">
                    <td>{p.prodName}</td>
                    <td>{p.manufacturer}</td>
                    <td>{p.expiryDate}</td>
                    <td>{p.packing}</td>
                    <td>{p.type}</td>
                    <td>{p.price}</td>
                    <td>
                      <input
                        onChange={(e) => {
                          setQty(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => onAddToCart(p.id)}
                      >
                        {" "}
                        Add To Cart
                      </button>
                    </td>
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

export default CustomerProductsScreen;
