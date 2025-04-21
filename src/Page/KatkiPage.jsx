import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import RinkInfo from "../components/RinkInfo";
import ContactForm from "../components/ContactForm";

import AdvantagesSection from "../components/AdvantagesSection";



const KatkiPage = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
       <HeroSection /> 
      <RinkInfo/>
      <AdvantagesSection/>
      <ContactForm/>
      <Footer />
      </div>
      
   
  );
};

export default KatkiPage;