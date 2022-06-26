import axios from "axios";

//post

export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
// export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

// \\\\\\\\\\\\\\\\\\\\\\\\
export const ADD_COMMENT = "ADD_COMMENT";

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
      .put(`${apiUrl}/like-post/${postId}`, { userId, like: 1 })
      .then((res) => {
        dispatch({
          type: LIKE_POST,
          payload: { postId, userId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikePost = (postId, userId) => {
  return (dispatch) => {
    authAxios
      .put(`${apiUrl}/unlike-post/${postId}`, { userId, like: 0 })
      .then((res) => {
        dispatch({
          type: UNLIKE_POST,
          payload: { postId, userId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePost = (postId, message) => {
  return (dispatch) => {
    authAxios
      .put(`${apiUrl}/${postId}`, { message })
      .then((res) => {
        dispatch({
          type: UPDATE_POST,
          payload: { postId, message },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    authAxios
      .delete(`${apiUrl}/${postId}`)
      .then((res) => {
        dispatch({
          type: DELETE_POST,
          payload: postId,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (postId, commenterId, text, commenterName) => {
  return (dispatch) => {
    authAxios
      .put(`${apiUrl}/comment-post/${postId}`, {
        commenterId,
        text,
        commenterName,
      })
      .then((res) => {
        dispatch({
          type: ADD_COMMENT,
          payload: { postId },
        });
      })
      .catch((err) => console.log(err));
  };
};
