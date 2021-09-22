import { Link } from "react-router-dom";

const OrderSuccessScreen = (props) => {
  return (
    <div className="order-success">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <div className="payment">
              <div className="payment_header">
                <h1>Order Success !</h1>
              </div>
              <div className="content">
                <p>
                  Congratulations!! your order has been placed Successfully!!
                </p>
                <Link to="/home">
                  <span>Keep Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessScreen;
