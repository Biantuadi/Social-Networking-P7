import React from "react";
import Auth from "../components/log/Auth";
import { UidContext } from "../components/AppContex";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

const Profil = () => {
  const uid = React.useContext(UidContext);
  const [active, setActive] = React.useState(false);

  return (
    <>
      {uid ? (
        <div className="main_container">
        <header>
          <Logo />
          <Nav />
        </header>

        
      </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Profil;
