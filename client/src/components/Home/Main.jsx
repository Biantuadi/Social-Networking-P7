import React from "react";
import Article from "./Article";
import AsideUsers from "./AllUsers.Aside";
import AllPosts from "./Post.Middle";

const Main = () => {
  return (
    <div className="section_container">
      <Article />
      <AllPosts />
      <AsideUsers />
    </div>
  );
};

export default Main;
