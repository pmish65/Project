import { Link } from "react-router-dom";

const DeliveryNavigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gery">
      <div className="container-fluid">
        <Link to="/delivery">
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
              <Link to="/edit-profile">
                <span className="nav-link">Edit Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit-password">
                <span className="nav-link">Edit Password</span>
              </Link>
            </li>
          </ul>
          <a
            href="/signin"
            class="btn btn-outline-success"
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

export default DeliveryNavigation;
