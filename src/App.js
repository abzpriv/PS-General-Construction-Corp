// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';
import MasonryServices from './component/MasonryServices';
import RoofInstallation from './component/RoofInstallation';
import WaterproofingServices from './component/WaterproofingServices';
import LocalLaw from './component/LocalLaw';
import BrickPointing from './component/BrickPointing';
import BrickRepair from './component/BrickRepair';
import ChimneyServices from './component/ChimneyServices';
import SideWalkRepair from './component/SideWalkRepair';
import StoopsService from './component/StoopsService';
import Portfolio from './component/Portfolio';
import ContactSection from './component/ContactSection';
import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/masonry-services" element={<MasonryServices />} />
          <Route path="/roofing" element={<RoofInstallation />} />
          <Route path="/waterproofing" element={<WaterproofingServices />} />
          <Route path="/local-law" element={<LocalLaw />} />
          <Route path="/brick-pointing" element={<BrickPointing />} />
          <Route path="/brick-repair" element={<BrickRepair />} />
          <Route path="/chimney" element={<ChimneyServices />} />
          <Route path="/sidewalk-repair" element={<SideWalkRepair />} />
          <Route path="/stoops-porches" element={<StoopsService />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
