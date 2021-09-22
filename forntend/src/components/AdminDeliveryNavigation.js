import { Link } from "react-router-dom";

const AdminDeliveryNavigation = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/admin" className="text-decoration-none text-white fs-2">
          <span>MedKart</span>
        </Link>
        <Link to="/edit-profile" className="text-decoration-none text-white fs-5 mx-4">
          <span>Edit Profile</span>
        </Link>
        <Link to="/edit-password" className="text-decoration-none text-white fs-5">
          <span>Edit Password</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <a href="/">
            <button type="button" class="btn btn-outline-light">Logout</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AdminDeliveryNavigation;
