import axios from "axios";

//post

export const GET_POSTS = "GET_POSTS";

export const getPost = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/api/post")
      .then((res) => {
        dispatch({
          type: GET_POSTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
