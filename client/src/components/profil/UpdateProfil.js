import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import Nav from "../Nav";
import Uploadimg from "./Uploadimg";

const UpdateProfil = () => {
  const [message, setMessage] = React.useState("");

  const userData = useSelector((state) => state.userReducer);

  return (
    <div className="mainContainer__100vh">
      <header>
        <Logo />
        <Nav />
      </header>

      <main className="main-profil">
        <div className="my-profil">
          <br />
          <div className="conatainer_name_profilImg">
            <h1>
              Profil de <span>{userData.name} </span>
            </h1>
            <br />
            <br />

            <div className="containerImg">
              <img src={userData.imageUrl} alt="" />
            </div>

            <Uploadimg />
          </div>

          <form className="forContainer">
            <div className="nameInput-container">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                placeholder={userData.name}
                className="name"
              />
            </div>

            <div className="bioInput-container">
              <label htmlFor="bio">Biographie</label>
              <textarea
                name="text"
                rows="14"
                cols="10"
                wrap="soft"
                className="bio"
                placeholder="hey hey hey"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <br />

            <div className="iconImgAndPost">

            <button type="submit" className="">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UpdateProfil;
