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
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import MaduraiPage from "./pages/Destinations/Madurai";
import ChennaiPage from "./pages/Destinations/Chennai";


const App = () => {
  return (
    <HelmetProvider>
    <Router>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/madurai" element={<MaduraiPage />} />
        <Route path="/destinations/chennai" element={<ChennaiPage />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/travel-essentials" element={<TravelEssentials />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
};

export default App;
