import React from "react";
import BreadCrum from "../../components/BreadCrum";
import AdminSideBar from "../../components/AdminSideBar";

const AdminHomePage = () => {
  return (
    <>
      <BreadCrum title="Admin Dashboard" />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3 mb-3">
            <AdminSideBar />
          </div>
          <div className="col-md-10 mb-3"></div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
