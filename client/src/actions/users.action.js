import axios from "axios";

export const GET_USERS = "GET_USERS";

const apiUrl = "https://api-alpha-indol.vercel.app/api/user";
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getUsers = () => {
  return (dispatch) => {
    authAxios
      .get("https://api-alpha-indol.vercel.app/api/user")
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
