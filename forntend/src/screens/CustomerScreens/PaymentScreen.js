import { Link } from "react-router-dom";

const PaymentScreen = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <div class="signin">
            <div class="panel-heading display-table">
              <div class="signin_header">
                <h3 class="panel-title display-td">Payment Details</h3>
              </div>
            </div>
            <div class="panel-body">
              <form role="form" id="payment-form">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label for="cardNumber">CARD NUMBER</label>
                      <div class="input-group">
                        <input
                          type="tel"
                          class="form-control"
                          name="cardNumber"
                          placeholder="Valid Card Number"
                          autocomplete="cc-number"
                          required
                          autofocus
                        />
                        <span class="input-group-addon">
                          <i class="fa fa-credit-card"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-7 col-md-7">
                    <div class="form-group">
                      <label for="cardExpiry">EXP DATE</label>
                      <input
                        type="tel"
                        class="form-control"
                        name="cardExpiry"
                        placeholder="MM / YY"
                        autocomplete="cc-exp"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-xs-5 col-md-5 pull-right">
                    <div class="form-group">
                      <label for="cardCVC">CVV </label>
                      <input
                        type="tel"
                        class="form-control"
                        name="cardCVC"
                        placeholder="CVV"
                        autocomplete="cc-csc"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <div class="form-group">
                      <label for="couponCode">CARD HOLDER NAME</label>
                      <input
                        type="text"
                        class="form-control"
                        name="couponCode"
                      />
                    </div>
                  </div>
                </div>
                <div class="row-pay">
                  <div class="col-xs-12">
                    <Link to="/payment-success">
                      <span className="btn btn-success btn-lg btn-block">
                        Pay
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <p class="payment-errors"></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
