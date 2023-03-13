import React, { useState, useEffect } from "react";
import Routes from "./router/";
import { UidContext } from "./components/AppContex";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";

const App = () => {
  const storedUid = localStorage.getItem("uid");
  const [uid, setUid] = useState(storedUid);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storedUid !== uid) {
      setUid(storedUid);
    }
  }, [storedUid]);

  useEffect(() => {
    if (uid) {
      dispatch(getUser(uid));
    }
    window.addEventListener("load", () => {
      let loader = document.querySelector(".loader");
      loader.style.display = "none";
    });
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
