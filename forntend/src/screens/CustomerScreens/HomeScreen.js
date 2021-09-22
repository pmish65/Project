import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";

const HomeScreen = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="head">
        <h1>ORDERING MEDICINES GOT A LOT SIMPLER</h1>
        <h4>Order Now & Save Up to 20%</h4>
        <h4>Fast Delivery</h4>
        <h4>India’s Leading Online Pharmacy & Healthcare Platform</h4>
      </div>
      <div className="buy">
        <Link to="/products">
          <span className="btn btn-success btn-lg">Buy</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
