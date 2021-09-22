import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotpassword } from "../../actions/userActions";

const ForgotPasswordScreen = (props) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const forgotPassword = useSelector((store) => store.forgotPassword);
  const { loading, response, error } = forgotPassword;

  const dispatch = useDispatch();

  const onForgotPassword = () => {
    dispatch(forgotpassword(email, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (response && response.status === 200) {
      props.history.push("/signin");
    } else if (error) {
      console.log(error);
      alert("email or password is wrong!!");
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
          <h1 className="text-center pt-5 pb-3 text-dark fw-bold">Forgot Password</h1>
          <div className="bg-light p-3 w-50 border border-3 border-dark rounded" style={{ margin: "auto" }}>
            <form>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control"  onChange={(e) => {setEmail(e.target.value);}} autoFocus placeholder="Enter Email" />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="npassword">New Password</label>
                  <input type="password" id="npassword" className="form-control"  onChange={(e) => {setNewPassword(e.target.value);}} placeholder="Enter New Password" />
                </div>
              </div>
              <div className="row align-items-center mt-4">
                <div className="col">
                  <label className="form-label fw-bold" htmlFor="cpassword">Confirm New Password</label>
                  <input type="password" id="cpassword" className="form-control"  onChange={(e) => {setConfirmPassword(e.target.value);}} placeholder="Confirm New Password" />
                </div>
              </div>
              <button type="button" onClick={onForgotPassword} className="btn btn-success btn-lg mt-4"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default ForgotPasswordScreen;
