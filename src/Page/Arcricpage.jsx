import React, { useEffect } from "react";
import ArcticModel from "../components/ArcticModel";
import ArcticAdvantages from "../components/ArcticAdvantages";
import ArcticElitePerformance from "../components/ArcticElitePerformance";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ArcticFacts from "../components/ArcticFacts";

const Arcricpage = () => {
  return (
    <>
    <ArcticModel/>
    <ArcticAdvantages/>
    <ArcticElitePerformance/>
    <ArcticFacts/>
    <ContactForm/>
    <Footer/>
    </>
  );
};

export default Arcricpage;
