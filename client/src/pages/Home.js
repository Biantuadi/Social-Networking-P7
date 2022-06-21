import React from "react";
import Auth from "../components/log/Auth";
import Logo from "../components/Logo";
import { UidContext } from "../components/AppContex";

const Home = () => {
  const uid = React.useContext(UidContext);

  return (
    <>
      {uid ? (
        <header>
          <Logo />
          <i className="fa-solid fa-arrow-up-left-from-circle"></i>
        </header>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Home;
