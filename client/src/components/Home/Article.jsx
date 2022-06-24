import React from "react";
import { useSelector } from 'react-redux';
import { dateParser } from "../utils/Utils";


const Article = () => {
    const userData = useSelector((state) => state.userReducer);

  return (
    <article className="articleHome">
      <div className="divContainer">
        <h2 className="name">{userData.name}</h2>

        <div className="container_img_profil">
          <img src={userData.imageUrl} alt="" />
        </div>

        <div className="renseignement">
          <h3 className="bio">Biographie</h3>
          <p>{userData.bio} </p>
          <br />

          <h3 className="email">email</h3>
          <p>{userData.email}</p>
          <br />

          <h3 className="inscription">Inscription</h3>
          <p>{dateParser(userData.createdAt)}</p>
          <br />
        </div>
      </div>
    </article>
  );
};

export default Article;
