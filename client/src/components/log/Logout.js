import React from "react";

const Logout = () => {
  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("uid");
    window.location = "/home";
  };
  return (
    <>
      <i
        className="fa-solid fa-arrow-right-from-bracket"
        onClick={logout}
        // classNameName="iconLogout"
      ></i>
    </>
  );
};

export default Logout;
