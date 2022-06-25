import React, { useState } from "react";
import Routes from "./router/";
import { UidContext } from "./components/AppContex";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/user.action";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setUid(localStorage.getItem("uid"));
    dispatch(getUser(localStorage.getItem("uid")));
    

    window.addEventListener("load", () => {
      let loader = document.querySelector(".loader");
      loader.style.display = "none";
    });
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
