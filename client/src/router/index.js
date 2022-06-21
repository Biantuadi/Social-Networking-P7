import React from 'react';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Redirect } from 'react-router';
import Home from '../pages/Home';
import Profil from '../pages/Profil';

const index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Profil />} />
                {/* <Route path="*" element={<Home />} /> */}
                {/* <Redirect from="*" to="/" /> */}
            </Routes>
        </Router>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/Profil" element={<Profil />} />
        //         {/* <Route path="*" element={<Navigate to ="/" />}/> */}

        //         {/* <Redirect from="*" to="/" /> */}
        //     </Routes>
        // </BrowserRouter>
    );
};

export default index;