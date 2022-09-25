import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="">
      <footer class="py-3 mt-5">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" href="#" class="nav-link px-2">
              Places
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              Pricing
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              FAQs
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link px-2">
              About
            </Link>
          </li>
        </ul>
        <p class="text-center text-muted">&copy; 2022 Reserva, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
