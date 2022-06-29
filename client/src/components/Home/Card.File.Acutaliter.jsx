import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/post.action";
import { shortDateParser, isEmpty } from "../utils/Utils";
import DeleteCard from "./Delete.Card";
import LikeButton from "./Like.Button";
import CommentCard from "./Comment";
import { roleToken } from "../../token/Token";

const CardAcutaliter = ({ post }) => {
  const [loadPost, setLoadPost] = React.useState(true);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [isUpdated, setIsUpdated] = React.useState(false);
  const [TextUpdated, setTextUpdatedState] = React.useState(null);
  const [showComment, setShowComment] = React.useState(false);

  const updateItem = (e) => {
    if (TextUpdated) {
      dispatch(updatePost(post._id, TextUpdated));
    }
    setIsUpdated(false);
  };

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
              />

              <div className="postContainer__header__name">
                <h4>
                  {!isEmpty(usersData[0]) &&
                    usersData.map((user) => {
                      if (user._id === post.posterId) {
                        return user.name;
                      }
                      return "";
                    })}
                </h4>
                <span>{shortDateParser(post.createdAt)}</span>
              </div>
            </div>

            {/**
             * user est le meme que l'auteur du post || roleToken === "admin"
             */}

            {post.posterId === userData._id || roleToken === "admin" ? (
              <div className="update-delete">
                <i
                  className="fa fa-edit"
                  onClick={() => setIsUpdated(!isUpdated)}
                ></i>
                <DeleteCard post={post._id} />
              </div>
            ) : null}

            {/* //////////////////////////// */}
          </div>

          <div className="viewPost">
            {/* text update post!!!!!! */}

            {isUpdated === false && <p>{post.message}</p>}

            {isUpdated === true && (
              <>
                <textarea
                  className="textarea"
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdatedState(e.target.value)}
                />
                <button className="btn-updateItem Upload" onClick={updateItem}>
                  Valider les modifications
                </button>
              </>
            )}

            {/* //////////////////// */}

            {post.imageUrl && <img src={post.imageUrl} alt="post_image" />}
          </div>

          <div className="iconImgAndPost like_comment">
            <div className="like">
              <LikeButton post={post} />
            </div>

            <div className="comment">
              <span>{post.comments.length}</span>
              <i
                className="fa-regular fa-comment"
                onClick={() => {
                  const flou = document.getElementById("flou");
                  flou.classList.toggle("flou-appear");

                  setShowComment(!showComment);
                }}
              ></i>
            </div>
          </div>
          {showComment && (
            <>
              <div className="flou" id="flou"></div>
              <CommentCard post={post} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CardAcutaliter;
