import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ title }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src="img/nouser_image.png" alt="No User" height={250} />
        </div>
        <div className="col-md-6">
          <h5 className="bg-primary text-light p-2 text-center">
            {title} Section
          </h5>
          <table className="table table-bordered table-striped table-hover">
            <tbody>
              <tr>
                <th>Name :</th>
                <td>Rohit Kumar Pal</td>
              </tr>
              <tr>
                <th>User Name :</th>
                <td>rhtkmrpl</td>
              </tr>
              <tr>
                <th>Email ID :</th>
                <td>rkp7144@gmail.com</td>
              </tr>
              <tr>
                <th>Phone No :</th>
                <td>1234567890</td>
              </tr>
              {title === "Buyer" ? (
                <>
                  <tr>
                    <th>Address :</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Pin :</th>
                    <td>1234567890</td>
                  </tr>
                  <tr>
                    <th>City :</th>
                    <td>1234567890</td>
                  </tr>
                  <tr>
                    <th>State :</th>
                    <td>1234567890</td>
                  </tr>
                </>
              ) : null}
              <tr>
                <td colSpan={2}>
                  <Link
                    to="update-profile"
                    className="btn btn-primary mt-2 w-100"
                  >
                    Update Profile
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Profile;
