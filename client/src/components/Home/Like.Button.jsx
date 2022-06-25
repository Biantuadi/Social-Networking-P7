import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UidContext } from "../AppContex";
import { useDispatch } from "react-redux";
import { likePost } from "../../actions/post.action";
import axios from "axios";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = React.useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const apiUrl = "http://localhost:3000/api/post";
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });

  const like = () => {
    // dispatch(likePost(post._id, uid));
    // setLiked(true);
    // authAxios
    //   .put(`${apiUrl}/like-post/${post._id}`, { uid })
    //   .then((res) => {
    //     console.log(res);
    //     setLiked(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  const unlike = () => {};

  useEffect(() => {
    if (post.usersLiked.includes(uid)) return setLiked(true);
  }, [uid, liked, post.Likers]);

  return (
    <>
      {liked === false && (
        <i className="fa-regular fa-heart" onClick={like} key={post.userId}></i>
      )}

      {liked === true && (
        <i className="fa-solid fa-heart" onClick={unlike} key={post.userId}></i>
      )}
    </>
  );
};

export default LikeButton;
