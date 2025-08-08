import React from "react";
import BreadCrum from "../../../components/BreadCrum";
import AdminSideBar from "../../../components/AdminSideBar";
import { Link } from "react-router-dom";

const AdminMainCategoryPage = () => {
  return (
    <>
      <BreadCrum title="Admin Main Category" />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3 mb-3">
            <AdminSideBar />
          </div>
          <div className="col-md-9 mb-3">
            <h5 className="bg-primary text-light text-center p-2">
              Main Category
              <Link to="/admin/maincategory/create">
                <i className="fas fa-plus-circle text-light float-end"></i>
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMainCategoryPage;
