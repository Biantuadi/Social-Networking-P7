import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { Redirect } from 'react-router';
import Home from '../pages/Home';
import Auth from '../pages/Connexion';

const index = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/auth" element={<Auth />} />
        //         {/* <Route path="*" element={<Home />} /> */}
        //         <Redirect from="*" to="/" />
        //     </Routes>
        // </Router>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="*" element={<Navigate to ="/" />}/>

                {/* <Redirect from="*" to="/" /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default index;