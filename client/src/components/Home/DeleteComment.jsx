import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../actions/post.action";

const DeleteComment = ({ comment, postId }) => {
  const [isAuthor, setIsAuthor] = React.useState(false);
  const [delet, setDelete] = React.useState(false);
  const userId = localStorage.getItem("uid");
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteComment(postId, comment._id));

  useEffect(() => {
    const checkAuthor = () => {
      if (userId === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [userId, comment.commenterId]);

  return (
    <>
      {isAuthor && (
        <i
          className="fas fa-trash-alt"
          onClick={() => {
            if (
              window.confirm(
                "vous êtes sur le point de supprimer ce commentaire"
              )
            ) {
              handleDelete();
            }
          }}
        ></i>
      )}
    </>
  );
};

export default DeleteComment;
