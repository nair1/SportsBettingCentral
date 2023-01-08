import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ProfitBoost from "./pages/ProfitBoost";
import FreeBet from "./pages/FreeBet";
import About from "./pages/About";

function MainContainer() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/free-bet" element={<FreeBet />} />
          <Route path="/profit-boost" element={<ProfitBoost />} />
        </Routes>
      </div>
    </>
  );
}

export default MainContainer;
