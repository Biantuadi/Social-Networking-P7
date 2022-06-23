import React, { useState } from "react";
import Routes from "./router/";
import { UidContext } from "./components/AppContex";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/user.action";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

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
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();

    if (uid) {
      dispatch(getUser(uid));
    }
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
