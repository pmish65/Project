import { Link } from "react-router-dom";

const HomeNavigation = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
      <Link to="" className="text-decoration-none text-white fs-2">
          <span>MedKart</span>
        </Link>
         <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <a href="/signin">
          <button type="button" class="btn btn-outline-light">Login/Registration</button>
          </a>
      </div>
    </nav>
  );
};

export default HomeNavigation;
