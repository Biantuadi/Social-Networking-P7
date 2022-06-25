import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UidContext } from "../AppContex";
import { useDispatch } from "react-redux";
import { likePost } from "../../actions/post.action";
import { useSelector } from "react-redux";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = React.useState(false);
  const userId = useContext(UidContext);
  const dispatch = useDispatch();
  // const usersData = useSelector((state) => state.usersReducer);
  // const posts = useSelector((state) => state.postReducer);

  const like = () => {
    dispatch(likePost(post._id, userId));
    setLiked(true);
  };

  const unlike = () => {};

  useEffect(() => {
    if (post.usersLiked.includes(userId)) return setLiked(true);
  }, [userId, liked, post.Likers]);

  return (
    <>
      {liked === false && (
        <>
          <span>{post.likes}</span>

          <i className="fa-regular fa-heart" onClick={like}></i>
        </>
      )}

      {liked === true && (
        <>
          <span id="incLike">{post.likes}</span>

          <i className="fa-solid fa-heart" onClick={unlike}></i>
        </>
      )}
    </>
  );
};

export default LikeButton;
