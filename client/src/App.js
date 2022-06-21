import React, { useState } from "react";
import { useContext } from "react";
import Routes from "./router/";
import { UidContext } from "./components/AppContex";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: `http://localhost:3000/jwtid`,
        withCredentials: true,
      })
        .then((res) => { 
          setUid(res.data);
        })
        .catch((err) => { console.log(err) });
    }
    fetchData();
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
