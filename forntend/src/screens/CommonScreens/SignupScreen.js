import { useEffect, useState } from "react";
import { signup } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const SignupScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const userSignup = useSelector((store) => store.userSignup);
  const { loading, response, error } = userSignup;

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    if (response && response.status === 200) {
      props.history.push("/signin");
    } else if (error) {
      console.log(error);
      alert("Error During Registration!!");
    }
  }, [loading, response, error]);

  const onSignup = () => {
    dispatch(
      signup(firstName, lastName, age, contact, email, password, confirmPassword, role, houseNo, street, pinCode, state, city
      )
    );
  };

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "600px" }}>
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-center pt-5 pb-3 text-dark fw-bold">Registration Form</h1>
            <div className="bg-light p-3 w-75 border border-3 border-dark rounded" style={{ margin: "auto" }}>
              <form>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" onChange={(e) => { setFirstName(e.target.value); }} className="form-control" autoFocus placeholder="Enter First Name" />
                </div>
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" className="form-control" onChange={(e) => { setLastName(e.target.value); }} placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="age">Age</label>
                  <input type="number" id="age" className="form-control" onChange={(e) => { setAge(e.target.value); }} placeholder="Enter Age" />
                </div>
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="contact">Contact Number</label>
                  <input type="number" id="contact" className="form-control" onChange={(e) => { setContact(e.target.value); }} placeholder="Enter Contact Number" />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col mt-4">
                  <label className="form-label fw-bold" htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" onChange={(e) => { setEmail(e.target.value); }} placeholder="Enter Email" />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value); }} placeholder="Password" />
                </div>
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="cpassword">Confirm Password</label>
                  <input type="password" className="form-control" id="cpassword" onChange={(e) => { setConfirmPassword(e.target.value); }} placeholder="Confirm Password" />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col-2">
                  <label className="form-label fw-bold" htmlFor="role">Select Role</label>
                  <select
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                    className="form-control"
                  >
                    <option>--Select Role--</option>
                    <option>ADMIN</option>
                    <option>CUSTOMER</option>
                  </select>
                </div>
                <div className="col-5">
                  <label className="form-label fw-bold" htmlFor="hnum">House Number</label>
                  <input type="number" id="hnum" className="form-control" onChange={(e) => {setHouseNo(e.target.value);}} placeholder="Enter House Number" />
                </div>
                <div className="col-5">
                  <label className="form-label fw-bold" htmlFor="street">Street</label>
                  <input type="text" id="street" className="form-control"  onChange={(e) => {setStreet(e.target.value);}} placeholder="Enter Street" />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="pincode">Pincode</label>
                  <input type="number" id="pincode" className="form-control"  onChange={(e) => {setPinCode(e.target.value);}} placeholder="Enter Pincode" />
                </div>
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="city">City</label>
                  <input type="text" id="city" className="form-control"  onChange={(e) => {setCity(e.target.value);}} placeholder="Enter City" />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col-7">
                  <label className="form-label fw-bold" htmlFor="state">State</label>
                  <input type="text" id="state" className="form-control"  onChange={(e) => {setState(e.target.value);}} placeholder="Enter State" />
                </div>
                <div className="col-4">
                  <button type="button" onClick={onSignup} className="btn btn-success btn-lg mt-4"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
};

export default SignupScreen;
