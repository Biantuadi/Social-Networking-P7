import React from "react";
import Auth from "../components/log/Auth";
import { UidContext } from "../components/AppContex";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

const Home = () => {
  const uid = React.useContext(UidContext);

  return (
    <>
      {uid ? (
        <header>
          <Logo />
          <Nav />
        </header>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Home;
