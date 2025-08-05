import React from "react";
import BreadCrum from "../components/BreadCrum";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";

const FeaturesPage = () => {
  return (
    <>
      <BreadCrum title="Features" />
      <Features />
      <Faqs />
      <Testimonials />
    </>
  );
};

export default FeaturesPage;
