import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {" "}
      <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8 col-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-flex flex-wrap">
              <Link
                to={import.meta.env.VITE_APP_SITE_MAP}
                target="_blank"
                rel="noreferrer"
                className="text-muted small me-4"
              >
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                <span className="d-none d-xl-inline-block">Location</span>
              </Link>
              <Link
                to={`tel: ${import.meta.env.VITE_APP_PHONE_NUMBER}`}
                rel="noreferrer"
                target="_blank"
                className="text-muted small me-4"
              >
                <i className="fas fa-phone-alt text-primary me-2"></i>
                <span className="d-none d-xl-inline-block">Phone</span>
              </Link>
              <Link
                to={`mailto:${import.meta.env.VITE_APP_EMAIL}`}
                target="_blank"
                rel="noreferrer"
                className="text-muted small me-0"
              >
                <i className="fas fa-envelope text-primary me-2"></i>
                <span className="d-none d-xl-inline-block">Email</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-6 text-center text-lg-end">
            <div className="mt-1 p-2 d-inline-flex align-itmes-center ">
              {/* <a href="#">
                <small className="me-3 text-dark">
                  <i className="fa fa-sign-in-alt text-primary me-2"></i>Login
                </small>
              </a> */}
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle text-dark"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <i className="fa fa-home text-primary me-2"></i> My
                    Dashboard
                  </small>
                </a>
                <div className="dropdown-menu rounded">
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-user-alt me-2"></i> My Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-comment-alt me-2"></i> Inbox
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-bell me-2"></i> Notifications
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-cog me-2"></i> Account Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    <i className="fas fa-power-off me-2"></i> Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="text-primary">
              <i className="fas fa-shopping-bag me-3"></i>
              {import.meta.env.VITE_APP_SITE_NAME}
            </h1>
            {/* <img src="img/logo.png" alt="Logo"/>  */}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className="nav-item nav-link ">
                Home
              </NavLink>
              <NavLink to="/shop" className="nav-item nav-link">
                Shop
              </NavLink>
              <NavLink to="/features" className="nav-item nav-link">
                Our Features
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/contactus" className="nav-item nav-link">
                Contact Us
              </NavLink>
              <NavLink to="/Faqs" className="nav-item nav-link">
                FAQs
              </NavLink>
              <NavLink to="/admin" className="nav-item nav-link">
                Admin
              </NavLink>
              {/* <div className="nav-item dropdown">
                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                  <span className="dropdown-toggle">Pages</span>
                </a>
                <div className="dropdown-menu m-0">
                  <NavLink to="/features" className="dropdown-item">
                    Our Features
                  </NavLink>
                  <NavLink to="/Faqs" className="dropdown-item">
                    FAQs
                  </NavLink>
                </div>
              </div> */}
            </div>
            <a
              href="#"
              className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
