import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const ReachUsScreen = (props) => {
  return (
    <div>
      <Navigation />
      <Header title="Reach Us" />
      <div className="Contactus">
        <div class="mb-4">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <h4>Address</h4>
          <hr />
          <h5>
            Street: 2912, S S Ahmed Road City: Delhi State/province/area: Delhi
            Phone number 55676598 Zip code 110002 Country calling code +91
            Country India
          </h5>
          <hr />
          <h4>Email</h4>
          <hr />
          <h5>care@pharmarack.com</h5>
          <hr />
          <h4>Contact No </h4>
          <hr />
          <h5>+91 8668212552</h5>
        </div>
      </div>
    </div>
  );
};

export default ReachUsScreen;
