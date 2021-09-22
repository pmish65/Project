import { Link } from "react-router-dom";
import { signin } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import signinpic from "../../images/pic1.png";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((store) => store.userSignin);
  const { loading, response, error } = userSignin;

  const dispatch = useDispatch();

  const onSignin = () => {
    dispatch(signin(email, password));
  };

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);
    if (response && response.status === 200) {
      const { data } = response;
      sessionStorage.setItem("token", response.data.token);
      if (data.user.role === "ADMIN") {
        props.history.push("/admin");
      } else if (data.user.role === "DELIVERY") {
        props.history.push("/delivery");
      } else {
        props.history.push("/home");
      }
    } else if (error) {
      console.log(error);
      alert("Error during signin!!");
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
          <h1 className="text-center pt-5 text-dark fw-bold">Login Form</h1>
          <div className="d-flex align-items-center justify-content-center" style={{ height: "600px" }}>
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={signinpic} className="img-fluid" alt="signin" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 bg-light p-3 border border-3 border-dark rounded">
                  <form >
                    <div className="form-outline mb-4">
                    <label className="form-label fw-bold" htmlFor="form3Example3">Email address</label>
                      <input type="email" id="form3Example3" className="form-control form-control-lg"
                        placeholder="Enter a valid email address" onChange={(e) => { setEmail(e.target.value); }} />
                    </div>

                    <div className="form-outline mb-3">
                    <label className="form-label fw-bold" htmlFor="form3Example4">Password</label>
                      <input type="password" id="form3Example4" className="form-control form-control-lg"
                        placeholder="Enter password" onChange={(e) => { setPassword(e.target.value); }} />
                      <a href="#!" className="text-body"><Link className="text-info ms-3" to="/forgot-password">Forgot Password?</Link></a>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="button" className="btn btn-success btn-lg" onClick={onSignin}
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link className="text-info" to="/signup">Register</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
};

export default SigninScreen;
