import axios from "axios";

export const GET_USER = "GET_USER";
export const UPDATE_BIO = "UPDATE_BIO";
export const UPLOAD_AVATAR = "UPLOAD_AVATAR";

const apiUrl = "https://my-app-back.adaptable.app/api/user";
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getUser = (uid) => {
  return (dispatch) => {
    authAxios
      .get(`https://my-app-back.adaptable.app/api/user/${uid}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    authAxios
      .put(`https://my-app-back.adaptable.app/api/user/${userId}`, { bio })
      .then((res) => {
        dispatch({
          type: UPDATE_BIO,
          payload: { bio },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadAvatar = (data, userId) => {
  return (dispatch) => {
    authAxios
      .post(`https://my-app-back.adaptable.app/api/user/avatar`, data)
      .then((res) => {
        authAxios
          .get(`https://my-app-back.adaptable.app/api/user/${userId}`)
          .then((res) => {
            dispatch({
              type: UPLOAD_AVATAR,
              payload: res.data.avatar,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
};
