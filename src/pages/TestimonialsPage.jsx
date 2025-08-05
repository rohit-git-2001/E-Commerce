import React from "react";
import BreadCrum from "../components/BreadCrum";
import Features from "../components/Features";  
import Testimonials from "../components/Testimonials";

const TestimonialsPage = () => {
  return (
    <>
      <BreadCrum title="Testimonials" />
      <Features />
      <Testimonials />
    </>
  );
};

export default TestimonialsPage;
