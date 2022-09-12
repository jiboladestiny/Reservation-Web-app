import "./navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link className="navbar-brand" to="/">
          Reserva
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {user && (
              <li class="nav-item me-3">
                <a class="nav-link btn d-flex align-items-center" href="#">
                  <i class="bx bxs-user me-1"></i> {user.username}
                </a>
              </li>
            )}
            {!user && (
              <li class="nav-item me-3">
                <a class="nav-link btn" href="#">
                  Login
                </a>
              </li>
            )}
            {!user && (
              <li class="nav-item">
                <a
                  class="nav-link btn"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Register
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
