import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Videomain from "../components/Videomain.jsx";
import Footer from "../components/Footer.jsx";
import CompanyInfo from "../components/CompanyInfo.jsx";
import Interactive3D from "../components/Interactive3D.jsx";
import ContactForm from "../components/ContactForm.jsx";
const Home = () => {
    return (
     
     <>
     <Videomain/>
     <Interactive3D/>
      {/* <Hero/> */}
      <CompanyInfo/>
      <Features/> 
      <ContactForm/>
       <Footer/>
     </>
    )
}
export default Home 