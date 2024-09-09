import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations/Destinations";
import TopAttractions from "./components/Destinations/TopAttractions";
import MaintenancePage from "./components/MaintenancePage";
import TravelEssentials from "./components/TravelGuide/TravelEssentials";
import Map from "./components/TravelGuide/Map";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/attractions" element={<TopAttractions />} />
        <Route path="travel-essentials" element={<TravelEssentials />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pagenotfound" element={<MaintenancePage />} />
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </Router>
  );
};

export default App;
