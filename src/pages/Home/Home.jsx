import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
// import AboutUs from "../../components/AboutUs/AboutUs";
// import ServiceSection from "../../components/Services/ServiceSection/ServiceSection";
// import HotLine from "../../components/HotLine/HotLine";
import BmiCalculator from "../../components/BmiCalculator/BmiCalculator";
const Home = () => {
  const [showBmi, setShowBmi] = useState(false);

  const handleShowBmi = () => {
    setShowBmi(true); // Show BMI component
    // Optional: scroll to it after rendering
    setTimeout(() => {
      document
        .getElementById("bmi-calculator")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <HeroSection onClickBmi={handleShowBmi} />
      {/* <AboutUs />
      <HotLine />
      <ServiceSection /> */}

      {/* Render BMI only when showBmi is true */}
      {showBmi && <BmiCalculator />}
    </>
  );
};

export default Home;
