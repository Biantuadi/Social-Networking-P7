import React from "react";
import Auth from "../components/log/Auth";
import { UidContext } from "../components/AppContex";
import UpdateProfil from "../components/profil/UpdateProfil";


const Profil = () => {
  const uid = React.useContext(UidContext);

  return (
    <>
      {uid ? (
        <UpdateProfil />
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Profil;
