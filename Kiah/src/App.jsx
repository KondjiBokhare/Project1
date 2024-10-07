import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import AboutUs from "./Pages/About/AboutUs/About";
import MakeInIndia from "./Pages/About/Make in India/MakeInIndia";
import Certificates from "./Pages/About/Certificates/Certificates";
import ExportedCountries from "./Pages/Services/ExportedCountries/ExportedCountries";
import ExportedIndustries from "./Pages/Services/ExportedIndustries/ExportedIndustries";
import MarketSector from "./Pages/Services/MarketSector/MarketSector";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import ECatalogue from "./Pages/E Catalogue/ECatalogue";
import Photos from "./Pages/Gallery/Photos/Photos";
import Videos from "./Pages/Gallery/Videos/Videos";
import Exhibitions from "./Pages/Gallery/Exhibitions/Exhibitions";
import AllProducts from "./Pages/Products/All Products/AllProducts";
import BrightBar from "./Pages/Products/Bright Bar/BrightBar";
import ButtweldFittings from "./Pages/Products/Buttweld fittings/ButtweldFittings";
import FabricationWorks from "./Pages/Products/Fabrication Work/FabricationWorks";
import Fasteners from "./Pages/Products/Fasteners/Fasteners";
import Ferrule from "./Pages/Products/Ferrule/Ferrule";
import ForgedFittings from "./Pages/Products/Forged Fittings/ForgedFittings";
import PipeFlanges from "./Pages/Products/Pipe Flanges/PipeFlanges";
import PlatesAndSheets from "./Pages/Products/Plates & Sheets/PlatesAndSheets";
import TubeFittings from "./Pages/Products/Tube Fittings/TubeFittings";
import Valves from "./Pages/Products/Valves/Valves";
import PipesAndTubes from "./Pages/Products/Pipes & Tubes/PipesAndTubes";



const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />}/> 
          <Route path="/make-in-india" element={<MakeInIndia />}/> 
          <Route path="/certificates" element={<Certificates/>}/>
          <Route path="/export-countries" element={<ExportedCountries />}/>  
          <Route path="/export-industries" element={<ExportedIndustries />}/> 
          <Route path="/market-sector" element={<MarketSector />}/> 
          <Route path="/blog" element={<Blog />}/> 
          <Route path="/contactUs" element={<Contact />}/> 
          <Route path="/e-catalogue" element={<ECatalogue />}/> 
          <Route path="/photos" element={<Photos />}/> 
          <Route path="/videos" element={<Videos />}/> 
          <Route path="/exhibitions" element={<Exhibitions />}/> 
          <Route path="/products" element={<AllProducts/>}/>
          <Route path="/bright-bar" element={<BrightBar/>}/>
          <Route path="/buttweld-fittings" element={<ButtweldFittings/>}/>
          <Route path="/fabrication-works" element={<FabricationWorks />}/>
          <Route path="/fasteners" element={<Fasteners />}/>
          <Route path="/ferrule" element={<Ferrule />}/>
          <Route path="/forged-fittings" element={<ForgedFittings />}/>
          <Route path="/pipe-flanges" element={<PipeFlanges />}/>
          <Route path="/plates&sheets" element={<PlatesAndSheets/>}/>
          <Route path="/pipes&tubes" element={<PipesAndTubes/>}/>
          <Route path="/tube-fittings" element={<TubeFittings />}/>
          <Route path="/valves" element={<Valves/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
