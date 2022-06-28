import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPost } from "../../actions/post.action";
import { shortDateParser } from "../utils/Utils";
import { isEmpty } from "../utils/Utils";

const Comment = ({ post }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const [text, setText] = React.useState("");

  const handleComment = (e) => {
    if (text) {
      dispatch(addComment(post._id, userData._id, text, userData.name));
      dispatch(getPost());
      setText("");
    }
  };

  return (
    <>
      <div className="comment-card" key={post._id}>
        {post.comments.map((comment, index) => {
          return (
            <>
              <li className="each-user-comment" key={comment.commenterId}>
                <div className="avatar-name-time" >
                  <div className="avatar-name" >
                    <img
                      src={
                        !isEmpty(usersData[0]) &&
                        usersData
                          .map((user) => {
                            if (user._id === comment.commenterId) {
                              return user.avatar;
                            }
                            return null;
                          })
                          .join("")
                      }
                      alt="avatar"
                      key={index + "avatar"}
                    />

                    <h4 key={index + "name"}>
                      {!isEmpty(usersData[0]) &&
                        usersData.map((user) => {
                          if (user._id === comment.commenterId) {
                            return user.name;
                          }
                          return "";
                        })}
                    </h4>
                  </div>

                  <span key={index + "hour"}>
                    {shortDateParser(comment.timestamp)}
                  </span>
                </div>

                <div className="comment-text" >
                  <p>{comment.text}</p>
                  {userData._id === comment.commenterId && (
                    <i className="fa fa-trash"></i>
                  )}
                </div>
              </li>
              <br />
            </>
          );
        })}
        <br />

        <textarea
          className="textarea"
          id="textareaComment"
          placeholder="Ajouter un commentaire"
          onChange={(e) => setText(e.target.value)}
          key={"textarea"}
        />
        <button
          className="btn-updateItem Upload"
          onClick={handleComment}
          key={"btn"}
        >
          Ajouter un commentaire
        </button>
      </div>
    </>
  );
};

export default Comment;
