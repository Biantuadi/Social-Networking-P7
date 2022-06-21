import React from "react";
import Auth from "../components/log/Auth";
import { UidContext } from "../components/AppContex";
import Logo from "../components/Logo";

const Profil = () => {
  const uid = React.useContext(UidContext);

  return (
    <>
       
        {uid ? (
          <header>
            <Logo />
            <i class="fa-solid fa-arrow-up-left-from-circle"></i>
          </header>
        ) : (
            <Auth />
        )}
       
    </>
  );
};

export default Profil;
