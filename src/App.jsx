import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import Ship from "./ShipModel.jsx";
import Courtyard from "./Courtyard.jsx";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ship" element={<Ship />} />
          <Route path="/courtyard" element={<Courtyard />} />
        </Routes>
    </Router>
  );
};

export default App;
