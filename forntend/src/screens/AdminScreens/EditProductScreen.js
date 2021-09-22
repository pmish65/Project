import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editproduct } from "../../actions/adminActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";

const EditProductScreen = (props) => {
  const [packing, setPacking] = useState("");
  const [price, setPrice] = useState("");

  const userEditProduct = useSelector((store) => store.userEditProduct);
  const { loading, response, error } = userEditProduct;

  const dispatch = useDispatch();

  function onEditProduct(id, packing, price) {
    dispatch(editproduct(id, packing, price));
  }

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    if (response && response.status === 200) {
      props.history.push("/view-products");
    } else if (error) {
      console.log(error);
      alert("error while editing product!!");
    }
  }, [loading, error, response]);

  return (
    <div>
      <AdminDeliveryNavigation />
      <h1 className="title">Edit Product</h1>
      <div>
        <Link to="/view-products" className="float-end">
          Back
        </Link>
      </div>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={sessionStorage.getItem("prodName")}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Packing</label>
          <input
            onChange={(e) => {
              setPacking(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button
            className="btn btn-success"
            onClick={() =>
              onEditProduct(sessionStorage.getItem("id"), packing, price)
            }
          >
            Submit
          </button>
        </div>
      </div>
      {loading && <div>waiting for response</div>}
    </div>
  );
};

export default EditProductScreen;
