import React from "react";
import Auth from "../components/log/Auth";
import Logo from "../components/Logo";
import { UidContext } from "../components/AppContex";
import Nav from "../components/Nav";

const NewPost = () => {
  const uid = React.useContext(UidContext);
  const [message, setMessage] = React.useState("");

  // const handleSubmit = (e) => {}
  const appearInputImg = () => {
    const inputImg = document.querySelectorAll(".desapear");
    inputImg.forEach((item) => {
      item.classList.toggle("appear");
    });
  };

  return (
    <div>
      {uid ? (
        <div className="mainContainer__100vh">
          <header>
            <Logo />
            <Nav />
          </header>

          <main className="mainContainer__new_post">
            <div className="myPost">
              <h1>Ajouter une publication</h1>
              <br />

              <form className="forContainer">
                {/* <input type="text" placeholder="message" className="message" /> */}
                <textarea
                  name="text"
                  rows="14"
                  cols="10"
                  wrap="soft"
                  className="message"
                  placeholder="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br />
                <br />
                <br />

                <div className="inputImg-container">
                  <label htmlFor="InputImg" className="desapear labelImg">
                    Lien Url de l'image
                  </label>
                  <input
                    type="text"
                    placeholder="https://www.example.com"
                    className="inputImg desapear"
                  />
                </div>
                <div className="iconImgAndPost">
                  <i className="fa-solid fa-image" onClick={appearInputImg}></i>
                  <button type="submit">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default NewPost;
