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
        <div className="mainContainer__100vh">
        <header>
          <Logo />
          <Nav />
        </header>

        <main className="">
          <h1>boni</h1>
        </main>
      </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Profil;
