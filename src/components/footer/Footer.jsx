import "./footer.css";

const Footer = () => {
  return (
    <div class="">
      <footer class="py-3 mt-5">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              Places
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              About
            </a>
          </li>
        </ul>
        <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
