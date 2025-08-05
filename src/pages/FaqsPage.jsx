import React from "react";
import Faqs from "../components/Faqs";
import BreadCrum from "../components/BreadCrum";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const FaqsPage = () => {
  return (
    <>
      <BreadCrum title="FAQs" />
      <Faqs />
      <Features />
      <Testimonials />
    </>
  );
};

export default FaqsPage;
