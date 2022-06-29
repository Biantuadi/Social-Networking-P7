import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../actions/post.action";
import { isEmpty } from "../../utils/Utils";
import Card from "./CardPost/Card.File.Acutaliter";

const Post = () => {
  const dispatsh = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatsh(getPosts());
  }, [dispatsh]);

  return (
    <>
      <main className="mainContainer__post">
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post._id + "card"} />;
          })}
        <br />
      </main>
    </>
  );
};

export default Post;
