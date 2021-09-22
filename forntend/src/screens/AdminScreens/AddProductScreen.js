import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct } from "../../actions/adminActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";

const AddProductScreen = (props) => {
  const [prodName, setProdName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [packing, setPacking] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const userAddProduct = useSelector((store) => store.userAddProduct);
  const { loading, response, error } = userAddProduct;

  const dispatch = useDispatch();

  const onAddProduct = () => {
    dispatch(
      addproduct(prodName, manufacturer, expiryDate, packing, type, price)
    );
  };

  useEffect(() => {
    if (response && response.status === 201) {
      props.history.push("/admin");
    } else if (error) {
      console.log(error);
      alert("product creation failed!!");
    }
  }, [loading, error, response]);

  return (
    <div>
      <AdminDeliveryNavigation />
      <div className="Add-product">
        <div className="signin_header">
          <h1>Add Product</h1>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Product Name</label>
          <input
            onChange={(e) => {
              setProdName(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Product Name"
          />
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Manufacturer</label>
          <input
            onChange={(e) => {
              setManufacturer(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Manufacturer"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Expiry Date</label>
          <input
            onChange={(e) => {
              setExpiryDate(e.target.value);
            }}
            type="date"
            className="form-control"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Packing</label>
          <input
            onChange={(e) => {
              setPacking(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Type</label>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="form-control"
          >
            <option>--Select Product Type--</option>
            <option>TABLET</option>
            <option>CAPSULE</option>
            <option>SYRUP</option>
            <option>INJECTION</option>
            <option>INSULIN</option>
            <option>SURGICAL</option>
            <option>AYURVEDIC</option>
            <option>HOMEOPATHIC</option>
            <option>DROPS</option>
            <option>IMPLANTS</option>
            <option>INHALERS</option>
          </select>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Price</label>
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="price"
          ></input>
        </div>
        <div className="mb-3">
          <button
            className="btn btn-success btn-signin btn-lg"
            onClick={onAddProduct}
          >
            Submit
          </button>
        </div>
        {loading && <div>waiting for response</div>}
      </div>
    </div>
  );
};

export default AddProductScreen;
