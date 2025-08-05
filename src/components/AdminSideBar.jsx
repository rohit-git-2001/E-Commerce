import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div class="list-group">
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-home"></i>
          <span className="float-end">Home</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Main Category</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Sub Category</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Brand</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-list"></i>
          <span className="float-end">Product</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-star"></i>
          <span className="float-end">Testimonial</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-rocket"></i>
          <span className="float-end">Features</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-question"></i>
          <span className="float-end">FAQs</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-envelope"></i>
          <span className="float-end">News Letter</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-phone"></i>
          <span className="float-end">Contact Us</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-shopping-bag"></i>
          <span className="float-end">Checkout</span>
        </Link>
        <Link
          to="/admin"
          className="list-group-item list-group-item-action active rounded-0 mb-1"
          aria-current="true"
        >
          <i className="fa fa-user"></i>
          <span className="float-end">User</span>
        </Link>
      </div>
    </>
  );
};

export default AdminSideBar;
