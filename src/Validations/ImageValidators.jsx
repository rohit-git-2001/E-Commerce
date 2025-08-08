import React from "react";

const ImageValidators = (e) => {
  let { files } = e.target;
  if (files.length === 0) {
    return "Picture is required";
  } else if (files.length === 1) {
    let pic = files[0];
    if (
      !(
        pic.type == "image/jpeg" ||
        pic.type == "image/jpg" ||
        pic.type == "image/png" ||
        pic.type == "image/gif"
      )
    ) {
      return "Invalid file type. Please upload a JPEG, PNG, or GIF image.";
    } else if (pic.size > 1024 * 1024) {
      return "File size exceeds 1MB. Please upload a smaller image.";
    } else {
      return "";
    }
  } else {
    return "";
  }
};

export default ImageValidators;
