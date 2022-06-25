import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { shortDateParser, isEmpty } from "../utils/Utils";

import imgTest from "../../img/test.jpg";

const CardAcutaliter = ({ post }) => {
  const [loadPost, setLoadPost] = React.useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);

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
                    })
                    .join("")
                }
                alt="avatar"
              />

              <div className="postContainer__header__name">
                <h4>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === post.posterId) {
                        return user.name;
                      }
                    })}
                </h4>
                <span>{shortDateParser(post.createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="viewPost">
            <p>{post.message}</p>
            {post.picture && <img src={post.picture} alt="post_image" />}
          </div>

          <div className="iconImgAndPost like_comment">
            <div className="like">
              <span>{post.likes.length}</span>
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="comment">
              <span>{post.likes.length}</span>
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardAcutaliter;
