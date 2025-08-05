import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div
          className="container py-5 border-start-0 border-end-0"
          style={{
            border: "1px solid",
            borderColor: "rgb(255, 255, 255, 0.08)",
          }}
        >
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item">
                <a href="index.html" className="p-0">
                  <h4 className="text-white">
                    <i className="fas fa-shopping-bag me-3"></i>
                    {import.meta.env.VITE_APP_SITE_NAME}
                  </h4>
                  {/* <img src="img/logo.png" alt="Logo"/>  */}
                </a>
              </div>
              <div className="footer-item">
                {/* <h4 className="text-white mb-4">Contact Info</h4> */}
                <div className="d-flex align-items-center">
                  <i className="fas fa-map-marker-alt text-primary me-3"></i>
                  <Link
                    to={import.meta.env.VITE_APP_SITE_ADDRESS}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white mb-0"
                  >
                    Address
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-envelope text-primary me-3"></i>
                  <p className="text-white mb-0">info@example.com</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-phone-alt text-primary me-3"></i>
                  <p className="text-white mb-0">(+012) 3456 7890</p>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="fab fa-firefox-browser text-primary me-3"></i>
                  <p className="text-white mb-0">Yoursite@ex.com</p>
                </div>
                <div className="d-flex">
                  <Link
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    to="#"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    to="#"
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    to="#"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    to="#"
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    to="#"
                  >
                    <i className="fab fa-youtube text-white"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link className="text-light" to="/about">
                  <i className="fas fa-angle-right me-2"></i> About Us
                </Link>
                <Link className="text-light" to="/features">
                  <i className="fas fa-angle-right me-2"></i> Feature
                </Link>
                <Link className="text-light" href="/shop">
                  <i className="fas fa-angle-right me-2"></i> Shop
                </Link>
                <Link className="text-light" href="/faqs">
                  <i className="fas fa-angle-right me-2"></i> FAQs
                </Link>
                <Link className="text-light" href="/contactus">
                  <i className="fas fa-angle-right me-2"></i> Contact us
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item">
                <h4 className="text-white mb-4">Support</h4>
                <Link className="text-light" to="/" href="#">
                  <i className="fas fa-angle-right me-2"></i> Privacy Policy
                </Link>
                <Link className="text-light" to="/" href="#">
                  <i className="fas fa-angle-right me-2"></i> Terms & Conditions
                </Link>
                <Link className="text-light" to="/" href="#">
                  <i className="fas fa-angle-right me-2"></i> Disclaimer
                </Link>
                <Link className="text-light" to="/" href="#">
                  <i className="fas fa-angle-right me-2"></i> Support
                </Link>
                <Link className="text-light" to="/" href="#">
                  <i className="fas fa-angle-right me-2"></i> FAQ
                </Link>
                <Link className="text-light" to="/" href="#">
                  <i className="fas fa-angle-right me-2"></i> Help
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item">
                <h4 className="text-white mb-4">News Letter Subscription</h4>
                <p className="text-light">
                  Subscribe our newsletter service to get update on latest
                  product and best deals
                </p>
                <form action="">
                  <div className="btn-group">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email Address"
                      className="form-control rounded-0 rounded-start"
                    />
                    <button className="btn btn-primary">Subscriibe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="text-center mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>
                  {import.meta.env.VITE_APP_SITE_NAME}
                </a>
                , All right reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
   