import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Attractions from "./pages/Attractions";
import MaintenancePage from "./pages/MaintenancePage";
import TravelEssentials from "./pages/TravelEssentials";
import Map from "./pages/Map";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/travel-essentials" element={<TravelEssentials />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </Router>
  );
};

export default App;
