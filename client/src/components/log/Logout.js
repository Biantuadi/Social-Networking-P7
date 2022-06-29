import React from "react";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("uid", "token");

    window.location = "/home";
  };
  return (
    <>
      <i className="fa-solid fa-arrow-right-from-bracket" onClick={logout}></i>
    </>
  );
};

export default Logout;
