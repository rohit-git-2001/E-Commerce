import React from "react";
import BreadCrum from "../components/BreadCrum";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <BreadCrum title="About Us" />
      <About />
      <Features />
      <Testimonials />
    </>
  );
};

export default AboutPage;
