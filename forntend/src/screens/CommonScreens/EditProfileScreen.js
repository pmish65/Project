import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editprofile } from "../../actions/userActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";
import DeliveryNavigation from "../../components/DeliveryNavigation";
import Navigation from "../../components/Navigation";
import store from "../../store";

const EditProfileScreen = (props) => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const data = store.getState().userSignin.response.data.user;

  const userEditProfile = useSelector((store) => store.userEditProfile);
  const { loading, response, error } = userEditProfile;

  const dispatch = useDispatch();

  const onEditProfile = () => {
    dispatch(
      editprofile(
        data.id,
        data.firstName,
        data.lastName,
        data.age,
        contact,
        email
      )
    );
  };

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    if (response && response.status === 200) {
      if (data.role === "DELIVERY") {
        props.history.push("/delivery");
      } else if (data.role === "ADMIN") {
        props.history.push("/admin");
      } else if (data.role === "CUSTOMER") {
        props.history.push("/home");
      }
    } else if (error) {
      console.log(error);
      alert("error while editing profile!!");
    }
  }, [loading, error, response]);

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
          {data.role === "ADMIN" && (<div> <AdminDeliveryNavigation /> </div>)}
          {data.role === "DELIVERY" && (<div> <DeliveryNavigation /> </div>)}
          {data.role === "CUSTOMER" && (<div> <Navigation /> </div>)}
          <h1 className="text-center pt-3 pb-3 text-dark fw-bold">Edit Profile</h1>
          <div className="bg-light p-3 w-75 border border-3 border-dark rounded" style={{ margin: "auto" }}>
            <form>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" className="form-control" value={data.firstName} readOnly />
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" className="form-control" value={data.lastName} readOnly />
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" onChange={(e) => { setEmail(e.target.value); }} autoFocus placeholder="Enter Email" />
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="cnumber">Contact Number</label>
                  <input type="number" id="cnumber" className="form-control" onChange={(e) => { setContact(e.target.value); }} placeholder="Enter Contact Number" />
                </div>
              </div>

              <button type="button" onClick={onEditProfile} className="btn btn-success btn-lg mt-4"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default EditProfileScreen;
