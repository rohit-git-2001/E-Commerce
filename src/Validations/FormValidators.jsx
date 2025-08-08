import React from "react";

const FormValidators = (e) => {
  let { name, value } = e.target;

  switch (name) {
    case "name":
      if (!value || value.length < 3) return name + "Field is mandatory";
      else if (value.length < 3 || value.length > 50)
        return name + "Field must be between 3 to 50 characters";
      else return "";

    default:
      return "";
  }
};

export default FormValidators;
