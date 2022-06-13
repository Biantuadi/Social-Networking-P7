import React from "react";
import Log from "../components/log";
import Logo from "../components/Logo";
import bgImg from "../assets/img/imgbin_empresa-business-service-computer-software-png.png";

const Profil = () => {
  return (
    <div className="profilContainer">
      <header>
        <Logo />
      </header>

      <img src={bgImg} alt="" className="workerImg"/>
    
      <Log />
    </div>
  );
};

export default Profil;
