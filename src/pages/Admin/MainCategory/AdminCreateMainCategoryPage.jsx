import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../../../components/BreadCrum";
import AdminSideBar from "../../../components/AdminSideBar";
import FormValidators from "../../../Validations/FormValidators";
import ImageValidators from "../../../Validations/ImageValidators";

const AdminCreateMainCategoryPage = () => {
  let [data, setData] = React.useState({
    name: "",
    pic: "",
    active: true,
  });

  let [errorMeessage, setErrorMessage] = React.useState({
    name: "Name is required",
    pic: "Picture is required",
  });

  let [show, setShow] = React.useState(false);

  function getInputData(e) {
    let name = e.target.name;
    let value = e.target.value;

    setErrorMessage((oldValue) => {
      return {
        ...oldValue,
        [name]: name === "pic" ? ImageValidators(e) : FormValidators(e),
      };
    });

    setData((oldValue) => {
      return {
        ...oldValue,
        [name]: name === "active" ? (value === "1" ? true : false) : value,
      };
    });
  }

  function postData(e) {
    e.preventDefault();

    let error = Object.values(errorMeessage).find((item) => item !== "");
    if (error) {
      setShow(true);
    } else {
      alert(`
        Name: ${data.name}
        Pic: ${data.pic}`);
    }
  }
  return (
    <>
      <BreadCrum title="Create Main Category" />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3 mb-3">
            <AdminSideBar />
          </div>
          <div className="col-md-9 mb-3">
            <h5 className="bg-primary text-light text-center p-2">
              Create Main Category
              <Link to="/admin/maincategory">
                <i className="fas fa-arrow-left text-light float-end"></i>
              </Link>
            </h5>

            <div className="container-fluid">
              <form onSubmit={postData}>
                <div className="row">
                  {/* Name entry point */}
                  <div className="col-12 mb-3">
                    <label>
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={getInputData}
                      placeholder="Main Category Name"
                      className={`form-control border-3 ${
                        show && errorMeessage.name
                          ? "border-danger"
                          : "border-primary"
                      }`}
                    />
                    {show && errorMeessage.name ? (
                      <p className="text-danger">{errorMeessage.name}</p>
                    ) : null}
                  </div>

                  {/* Picture entry point */}

                  <div className="col-md-6 mb-3">
                    <label>Pic*</label>
                    <input
                      type="file"
                      name="pic"
                      onChange={getInputData}
                      className={`form-control border-3 ${
                        show && errorMeessage.pic
                          ? "border-danger"
                          : "border-primary"
                      }`}
                    />
                    {show && errorMeessage.pic ? (
                      <p className="text-danger">{errorMeessage.pic}</p>
                    ) : null}
                  </div>

                  {/* Active status entry point*/}
                  <div className="col-md-6 mb-3">
                    <label>Active</label>
                    <select
                      name="active"
                      onChange={getInputData}
                      className="form-select border-3 border-primary"
                    >
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>

                  {/* Submit button */}

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateMainCategoryPage;
