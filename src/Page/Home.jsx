import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Videomain from "../components/Videomain.jsx";
import Footer from "../components/Footer.jsx";
import CompanyInfo from "../components/CompanyInfo.jsx";
import Interactive3D from "../components/Interactive3D.jsx";
import ContactForm from "../components/ContactForm.jsx";
import HockeyRinks from "../components/HockeyRinks.jsx";
import DecorativeBoards from "../components/DecorativeBoards.jsx";
import CoolingSystems from "../components/CoolingSystems.jsx";
import WaterSystems from "../components/WaterSystems.jsx";
import IceResurfacer from "../components/IceResurfacer.jsx";
import SyntheticIce from "../components/SyntheticIce.jsx";
import ProjectsMap from "../components/ProjectsMap.jsx";
const Home = () => {
    return (
     
     <>
     <Videomain/>
     
      {/* <Hero/> */}
      <CompanyInfo/>
      <Features/> 
      <HockeyRinks/>
      <DecorativeBoards/>
      <CoolingSystems/>
      <WaterSystems/>
      <IceResurfacer/>
      <SyntheticIce/>
      <Interactive3D/>
      {/* <ProjectsMap/> */}
      <ContactForm/>
       <Footer/>
     </>
    )
}
export default Home 