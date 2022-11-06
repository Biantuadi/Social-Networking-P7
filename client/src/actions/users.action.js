import axios from "axios";

export const GET_USERS = "GET_USERS";

const apiUrl = "https://my-app-back.adaptable.app/api/user";
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getUsers = () => {
  return (dispatch) => {
    authAxios
      .get("https://my-app-back.adaptable.app/api/user")
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
