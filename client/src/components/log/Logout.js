import React from "react";
import iconLogout from "../../img/icon/arrow-right-from-bracket-solid.svg";
import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  const logout = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/api/user/logout",
      withCredentials: true,
    })
      .then((res) => {
        cookie.remove("token");
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <img
        src={iconLogout}
        alt="icon_logout"
        onClick={logout}
        className="iconLogout"
      />
    </>
  );
};

export default Logout;
