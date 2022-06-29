import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteComments, getPosts } from "../../actions/post.action";

const DeleteComment = ({ postId, comment }) => {
  const [isAuthor, setIsAuthor] = React.useState(false);
  const userId = localStorage.getItem("uid");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteComments(postId, comment._id));
    dispatch(getPosts());
  };

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
          className="fa fa-trash"
          onClick={() => {
            if (
              window.confirm(
                "vous êtes sur le point de supprimer ce commentaire"
              )
            )
              handleDelete();
          }}
        ></i>
      )}
    </>
  );
};

export default DeleteComment;
