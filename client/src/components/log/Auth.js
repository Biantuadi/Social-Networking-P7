import React, { useState } from "react";
import Logo from "../Logo";
import background from "../../img/imgbin_empresa-business-service-computer-software-png.png";
import SignupForm from "./SignupModal";
import LoginForm from "./LoginModal";

const Auth = () => {
  const [Signup, setSignupModal] = useState(false);
  const [Login, setLoginModal] = useState(true);

  const handleModals = (e) => {
    if (e.target.id === "signup") {
      setSignupModal(true);
      setLoginModal(false);
    } else if (e.target.id === "login") {
      setSignupModal(false);
      setLoginModal(true);
    }
  };

  return (
    <>
      <div className="containerNavAuth">
        <ul className="auth__nav">
          <li
            onClick={handleModals}
            id="signup"
            className={Signup ? "nav-active" : ""}
          >
            Signup
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={Login ? "nav-active" : ""}
          >
            Login
          </li>
        </ul>
      </div>
      <br />
      <br />

      {Signup && <SignupForm />}
      {Login && <LoginForm />}
    </>
  );
};

export default Auth;
