import React from "react";
import Auth from "../components/log/Auth";
import Logo from "../components/Logo";
import { UidContext } from "../components/AppContex";
import Nav from "../components/Nav";

const NewPost = () => {
  const uid = React.useContext(UidContext);
  const [message, setMessage] = React.useState("");

  // const handleSubmit = (e) => {}
  

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

                <img
                    src="https://theatrum-belli.com/wp-content/uploads/2019/03/Soldat-avec-syst%C3%A8me-FELIN.jpg"
                    alt=""
                  />

                <div className="iconImgAndPost">
                  <label htmlFor="file-input">
                    <i
                      className="fa-solid fa-image"
                    ></i>
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
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default NewPost;
