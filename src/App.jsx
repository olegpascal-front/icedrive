import Home from "./Page/Home.jsx";
import Arcticpage from "./Page/Arcricpage.jsx";

import React from "react";
import "./index.css";
// import Hero from "./components/Hero.jsx";
import Header from "./components/Header.jsx";
// import Features from "./components/Features.jsx";
// import Imagslider from "./components/Imagslider.jsx";
// import Carditem from "./components/Carditem.jsx";
import Preloader from "./components/Preloader.jsx";
import Threefoto from "./assets/images/3.jpg";
import Fourfoto from "./assets/images/4.jpg";
import Fivefoto from "./assets/images/arcric.png";


import { Route, BrowserRouter, Routes} from "react-router-dom";
import SportsPage from "./Page/sportspage.jsx";
import KatkiPage from "./Page/KatkiPage.jsx";



function App() {
  const product = {
    name: 'Машина ARctic',
    description: 'Мощная машина для ваших услуг',
      brand: 'Arctic',
      category: 'Бортоподрезная машина',
    images: [Fivefoto, Fourfoto, Threefoto],
    price: 25000,
    additionalInfo: {
      'Двигатель': 'Tayota 12r23 ',
      'Топлево': 'АИ-95',
      'Размер': '1 метр',
    },
  };


  return (
    <>
      <BrowserRouter>
        <Preloader />
         <Header/>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route  path="/arctic"  element={<Arcticpage product={product}/> } />
         <Route path="/sports" element={<SportsPage/>} />
         <Route path="/ice" element={<KatkiPage/>} />
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
