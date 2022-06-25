import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { shortDateParser, isEmpty } from "../utils/Utils";
import LikeButton from "./Like.Button";

const CardAcutaliter = ({ post }) => {
  const [loadPost, setLoadPost] = React.useState(true);
  const usersData = useSelector((state) => state.usersReducer);

  useEffect(() => {
    !isEmpty(usersData[0]) && setLoadPost(false);
  }, [usersData]);

  return (
    <div className="postContainer" key={post._id}>
      {loadPost ? (
        <i className="fa fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="postContainer__header">
            <div className="img-name-time">
              <img
                src={
                  !isEmpty(usersData[0]) &&
                  usersData
                    .map((user) => {
                      if (user._id === post.posterId) {
                        return user.avatar;
                      }
                      return null;
                    })
                    .join("")
                }
                alt="avatar"
                key={post.name + "avatar"}
              />

              <div className="postContainer__header__name">
                <h4 key={post.name}>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === post.posterId) {
                        return user.name;
                      }
                      return "";
                    })}
                </h4>
                <span key={post.name + "timer_post_created"}>
                  {shortDateParser(post.createdAt)}
                </span>
              </div>
            </div>
          </div>

          <div className="viewPost">
            <p key={post.message}>{post.message}</p>
            {post.picture && (
              <img src={post.picture} alt="post_image" key={post.picture} />
            )}
          </div>

          <div className="iconImgAndPost like_comment">
            <div className="like">
              <span key={post.likes}>{post.likes.length}</span>
              <LikeButton post={post} />
            </div>
            <div className="comment">
              <span key={post.comments}>{post.comments.length}</span>
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardAcutaliter;