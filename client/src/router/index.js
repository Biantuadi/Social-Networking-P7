import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import NewPost from "../pages/NewPost";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
};

export default index;
