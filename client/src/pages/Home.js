import React from "react";
import Auth from "../components/log/Auth";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      {/* <Auth /> */}

      <header>
        <Logo />
        <ul className="auth__nav">
          <li
            // onClick={(className = "nav-active")}
            id="allPosts"
            // className={( ) =>{ return "nav-active"}}
          >
            Posts
          </li>
          <li
            // onClick=
            id="myPosts"
            // className={Login ? "nav-active" : ""}
          >
            Profil
          </li>
        </ul>
      </header>
    </>
  );
};

export default Home;
