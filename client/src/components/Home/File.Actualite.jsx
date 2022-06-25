import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../../actions/post.action";
import { isEmpty } from "../../components/utils/Utils";
import Card from "./Card.File.Acutaliter";

const Post = () => {
  const [loadPost, setLoadPost] = React.useState(true);
  const dispatsh = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (loadPost) {
      dispatsh(getPost());
      setLoadPost(false); 
    }
  }, [loadPost]);

  return (
    <>
      <main className="mainContainer__post">
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} />;
          })}
        <br />
      </main>
    </>
  );
};

export default Post;
