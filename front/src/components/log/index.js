import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Log = () => {
  const [SignupModal, setSignupModal] = useState(true);
  const [LoginModal, setLoginModal] = useState(false);

  const handleModal = (e) => {
    if (e.target.id === "signup") {
      setSignupModal(true);
      setLoginModal(false);
    } else if (e.target.id === "login") {
      setSignupModal(false);
      setLoginModal(true);
    }
  };

  return (
    <section className="profilSection">
      <ul className="nav">
        <li
          onClick={handleModal}
          id="signup"
          className={SignupModal ? "activeBtn" : ""}
        >
          S'inscrire
        </li>
        <li
          onClick={handleModal}
          id="login"
          className={LoginModal ? "activeBtn" : ""}
        >
          Se connecter
        </li>
      </ul>

      <div className="formContainer">
        {SignupModal && <SignupForm />}
        {LoginModal && <LoginForm />}
      </div>
    </section>
  );
};

export default Log;
