import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profil" element={<Profil />} />
        {/* <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default index;
