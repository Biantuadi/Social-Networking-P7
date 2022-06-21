import React from "react";
import Auth from "../components/log/Auth";
import { UidContext } from "../components/AppContex";
import Logo from "../components/Logo";
import background from "../img/imgbin_empresa-business-service-computer-software-png.png";

const Profil = () => {
  const uid = React.useContext(UidContext);

  return (
    <>
      <div className="container">
        <header>
          <Logo />
        </header>

        <div className="back-ground">
          <img src={background} alt="" />
        </div>
        {uid ? (
          <h1>Update page</h1>
        ) : (
          <main>
            <Auth />
          </main>
        )}
      </div>
    </>
  );
};

export default Profil;
