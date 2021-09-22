import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-gery">
      <div className="container-fluid">
        <Link to="/home">
          <span className="navbar-brand">Pharmarack</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products">
                <span className="nav-link">Products</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us">
                <span className="nav-link">About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reach-us">
                <span className="nav-link">Reach Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit-profile">
                <span className="nav-link">Edit Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit-password">
                <span className="nav-link">Edit Password</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart/list">
                <span className="nav-link">Cart</span>
              </Link>
            </li>
          </ul>
          <a
            href="/signin"
            className="btn btn-outline-success logout"
            tabindex="-1"
            role="button"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
