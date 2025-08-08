import React from "react";

const ImageValidators = (e) => {
  let { files } = e.target.files;
  if (files.length === 0) {
    return "Picture is required";
  } else if (files.length === 1) {
    let pic = files[1];
    console.log(pic);
  } else {
    console.log("Test result: No file selected");
  }
};

export default ImageValidators;
