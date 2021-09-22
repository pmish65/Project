import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddeliveryperson } from "../../actions/adminActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";

const AddDeliveryScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(
      adddeliveryperson(
        firstName,
        lastName,
        age,
        contact,
        email,
        password,
        confirmPassword,
        houseNo,
        street,
        pinCode,
        state,
        city
      )
    );
  };

  const userAddDeliveryPerson = useSelector(
    (store) => store.userAddDeliveryPerson
  );
  const { loading, response, error } = userAddDeliveryPerson;

  useEffect(() => {
    if (response && response.status === 201) {
      props.history.push("/admin");
    } else if (error) {
      console.log(error);
      alert("error while signup!!");
    }
  }, [loading, response, error]);

  return (
    <div>
      <AdminDeliveryNavigation />
      <div className="addDelivery-form">
        <div className="signin_header">
          <h1>Add Delivery Boy</h1>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">First Name</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Last Name</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Age</label>
          <input
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="number"
            className="form-control"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Contact</label>
          <input
            onChange={(e) => {
              setContact(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            placeholder="text@test.com"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="*****"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="*****"
          />
        </div>
        <div className="signup-mb-3">
          <label className="form-label">House No</label>
          <input
            onChange={(e) => {
              setHouseNo(e.target.value);
            }}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Street</label>
          <input
            onChange={(e) => {
              setStreet(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="signup-mb-3">
          <label className="form-label">Pincode</label>
          <input
            onChange={(e) => {
              setPinCode(e.target.value);
            }}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">City</label>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="signup-mb-3">
          <label className="form-label">State</label>
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-success btn-signin btn-lg" onClick={onAdd}>
            Submit
          </button>
        </div>
        {loading && <div>waiting for response</div>}
      </div>
    </div>
  );
};

export default AddDeliveryScreen;
