import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editpassword } from "../../actions/userActions";
import AdminDeliveryNavigation from "../../components/AdminDeliveryNavigation";
import DeliveryNavigation from "../../components/DeliveryNavigation";
import Navigation from "../../components/Navigation";
import store from "../../store";

const EditPasswordScreen = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = store.getState().userSignin.response.data.user;

  const userEditPassword = useSelector((store) => store.userEditPassword);
  const { loading, response, error } = userEditPassword;

  const dispatch = useDispatch();

  const onEditPassword = () => {
    dispatch(
      editpassword(data.email, oldPassword, newPassword, confirmPassword)
    );
  };

  useEffect(() => {
    if (response && response.status === 200) {
      if (data.role === "DELIVERY") {
        props.history.push("/delivery");
      } else if (data.role === "ADMIN") {
        props.history.push("/admin");
      } else if (data.role === "CUSTOMER") {
        props.history.push("/home");
      }
    } else if (response && response.status === 406) {
      alert("Password done not match");
    } else if (error) {
      console.log(error);
      alert("email or password is wrong!!");
    }
  }, [loading, error, response]);

  return (
    // <div>
    // {data.role === "ADMIN" && (
    //   <div>
    //     <AdminDeliveryNavigation />
    //   </div>
    // )}
    // {data.role === "DELIVERY" && (
    //   <div>
    //     <DeliveryNavigation />
    //   </div>
    // )}
    // {data.role === "CUSTOMER" && (
    //   <div>
    //     <Navigation />
    //   </div>
    // )}
    //   <div className="edit-password">
    //     <div className="signin_header">
    //       <h1>Edit Password</h1>
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Email</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         value={data.email}
    //         readOnly
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Old Password</label>
    //       <input
    //         onChange={(e) => {
    //           setOldPassword(e.target.value);
    //         }}
    //         type="password"
    //         className="form-control"
    //         placeholder="*****"
    //       ></input>
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">New Password</label>
    //       <input
    //         onChange={(e) => {
    //           setNewPassword(e.target.value);
    //         }}
    //         type="password"
    //         className="form-control"
    //         placeholder="*****"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Confirm Password</label>
    //       <input
    //         onChange={(e) => {
    //           setConfirmPassword(e.target.value);
    //         }}
    //         type="password"
    //         className="form-control"
    //         placeholder="*****"
    //       ></input>
    //     </div>
    //     <div className="mb-3">
    //       <button
    //         className="btn btn-success btn-signin btn-lg"
    //         onClick={onEditPassword}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //     {loading && <div>waiting for response</div>}
    //   </div>
    // </div>
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "600px" }}>
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <>
          {data.role === "ADMIN" && (<div><AdminDeliveryNavigation /></div>)}
          {data.role === "DELIVERY" && (<div><DeliveryNavigation /></div>)}
          {data.role === "CUSTOMER" && (<div><Navigation /></div>)}
          <h1 className="text-center pt-3 pb-3 text-dark fw-bold">Edit Password</h1>
          <div className="bg-light p-3 w-75 border border-3 border-dark rounded" style={{ margin: "auto" }}>
            <form>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" value={data.email} readOnly />
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="opassword">Old Password</label>
                  <input type="password" id="opassword" className="form-control" onChange={(e) => {setOldPassword(e.target.value);}} autoFocus placeholder="Enter Old Password" />
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="npassword">New Password</label>
                  <input type="password" id="npassword" className="form-control" onChange={(e) => {setNewPassword(e.target.value);}} placeholder="Enter New Password" />
                </div>
              </div>

              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="cnpassword">Confirm New Password</label>
                  <input type="password" id="cnpassword" className="form-control"  onChange={(e) => {setConfirmPassword(e.target.value);}} placeholder="Confirm New Password" />
                </div>
              </div>

              <button type="button" onClick={onEditPassword} className="btn btn-success btn-lg mt-4"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default EditPasswordScreen;
