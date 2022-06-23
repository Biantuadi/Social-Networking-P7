import React from "react";
import Logo from "../Logo";
import Nav from "../Nav";

const UpdateProfil = () => {
  const [message, setMessage] = React.useState("");
  return (
    <div className="mainContainer__100vh">
      <header>
        <Logo />
        <Nav />
      </header>

      <main className="main-profil">
        <div className="my-profil">
          <br />
          <h1>
            Profil de <span>valeur dynamique</span>
          </h1>
          <br />
          <br />
          <div className="containerImg">
            <img
              src="https://theatrum-belli.com/wp-content/uploads/2019/03/Soldat-avec-syst%C3%A8me-FELIN.jpg"
              alt=""
            />
          </div>
          <form className="forContainer">
            {/* <input type="text" placeholder="message" className="message" /> */}
            <div className="nameInput-container">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                placeholder="valeur dynamique"
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
                placeholder="valeur dynamique"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <br />
            <br />
            <br />

            <div className="iconImgAndPost">
              <label htmlFor="file-input">
                <i className="fa-solid fa-image"></i>
              </label>
              <input type="file" id="file-input" className="file-input" />

              <button type="submit">
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
