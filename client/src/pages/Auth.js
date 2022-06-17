import React from "react";
import Logo from "../components/Logo";
import background from "../img/imgbin_empresa-business-service-computer-software-png.png";

const Auth = () => {
  return (
    <div className="container__auth">
      <header>
        <Logo />
        <ul className="auth__nav">
          <li>Signup</li>
          <li>Login</li>
        </ul>
      </header>

      <div className="back-ground">
        <img src={background} alt="" />
      </div>

      <main>
        <h1>Welcome to the Auth Page</h1>
      </main>
    </div>
  );
};

export default Auth;
