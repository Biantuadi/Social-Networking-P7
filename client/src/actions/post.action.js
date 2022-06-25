import axios from "axios";

//post

export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
// export const UNLIKE_POST = "UNLIKE_POST";

const apiUrl = "http://localhost:3000/api/post";
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getPost = () => {
  return (dispatch) => {
    authAxios
      .get(apiUrl)
      .then((res) => {
        dispatch({
          type: GET_POSTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const likePost = (postId, userId) => {
  return (dispatch) => {
    authAxios
      .put(`${apiUrl}/like-post/${postId}`, { userId })
      .then((res) => {
        dispatch({
          type: LIKE_POST,
          payload: { postId, userId },
        });
      })
      .catch((err) => console.log(err));
  };
};

// export const unlikePost = (id) => {
//   return (dispatch) => {
//     authAxios
//       .put(`http://localhost:3000/api/post/unlike-post/${id}`)
//       .then((res) => {
//         dispatch({
//           type: UNLIKE_POST,

//         });
//       })
//       .catch((err) => console.log(err));
//   };
// }
