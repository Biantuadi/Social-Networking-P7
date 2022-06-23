import axios from "axios";

export const GET_USER = "GET_USER";
// export const UPLOAD_PROFIL = "UPLOAD_PROFIL";
export const UPDATE_PROFIL = "UPDATE_PROFIL";

export const getUser = (uid) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/api/user/${uid}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

// export const uploadProfil = (uid, imageUrl) => {};

export const updateProfil = (userId, name, bio) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/api/user/${userId}`, { name, bio })
      .then((res) => {
        dispatch({
          type: UPDATE_PROFIL,
          payload: { name, bio },
        })
      })
      .catch((err) => console.log(err));
  };
};
