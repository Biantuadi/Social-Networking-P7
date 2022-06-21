import React from "react";
import logo from "../img/Logos/icon-left-font-monochrome-black.png";
import {NavLink} from 'react-router-dom';


const Logo = () => {
  return (
    <div className="header__img">
      <NavLink to='/'>
      <img src={logo} alt="img_Logo" className="imgLogo" />
      </NavLink>
    </div>
  );
};

export default Logo;
