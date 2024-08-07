import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="link">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            ESHOP
          </h6>
          <p>
            Online shopping for 24/7 .Eshop is your premier destination for all your shopping needs.
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>Men's</p>
          <p>Women's</p>
          <p>Jewelery</p>
          <p>Electronics</p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="/" href="/" className="text-reset text-decoration-none">Home</Link>
          </p>
          <p>
            <Link to="/product" href="/" className="text-reset text-decoration-none">Products</Link>
          </p>
          <p>
            <Link to="/about" href="/" className="text-reset text-decoration-none">About</Link>
          </p>
          <p>
            <Link to="/contact" href="/" className="text-reset text-decoration-none">Contact</Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i>RAJKOT, GUJRAT</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@eshop.com
          </p>
          <p><i className="fas fa-phone me-3"></i>+91 98999 89989</p>
          <p><i className="fas fa-print me-3"></i>+91 99899 95999</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4">
    © 2024 Copyright:
    <a className="text-reset fw-bold" href="/">@ESHOP</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}

    </>
  );
};

export default Footer;
