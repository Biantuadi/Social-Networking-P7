import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UidContext } from "../AppContex";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = React.useState(false);
  const uid = useContext(UidContext);

  const like = () => {};
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
