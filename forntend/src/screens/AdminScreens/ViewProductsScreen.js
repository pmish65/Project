import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct } from "../../actions/adminActions";
import { viewproducts } from "../../actions/userActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";

const ViewProductsScreen = (props) => {
  const [prodName, setProdName] = useState("");
  const [products, setProducts] = useState([]);

  const userViewProduct = useSelector((store) => store.userViewProduct);
  const { loading, response, error } = userViewProduct;

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(viewproducts(prodName));
  };

  function onEdit(id, prodName) {
    sessionStorage.setItem("prodName", prodName);
    sessionStorage.setItem("id", id);
    props.history.push("/edit-product");
  }

  useEffect(() => {
    dispatch(viewproducts(prodName));
  }, []);

  useEffect(() => {
    if (response && response.status === 200) {
      setProducts(response.data);
    } else if (error) {
      console.log(error);
      alert("product Not Found!!");
    }
  }, [loading, error, response]);

  function onDelete(id) {
    setProducts(products.filter((product) => product.id !== id));
    dispatch(deleteproduct(id));
  }

  return (
    <div>
      <AdminDeliveryNavigation />
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
                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(p.id)}
                      >
                        {" "}
                        Delete
                      </button>
                      <button
                        className="btn btn-danger edit"
                        onClick={() => onEdit(p.id, p.prodName)}
                      >
                        {" "}
                        Edit
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

export default ViewProductsScreen;
