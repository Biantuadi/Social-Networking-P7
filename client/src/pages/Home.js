import React from "react";
import Auth from "../components/log/Auth";
import { UidContext } from "../components/AppContex";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import imgTest from "../img/test.jpg";
import axios from "axios";


const Home = () => {
  const uid = React.useContext(UidContext);
  const [message, setMessage] = React.useState("");

  // const handlePost = () => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:3000/api/post",
  //     data: {
  //       uid: uid,
  //       message: message,
  //     }
  //   })
  //     .then(res => { console.log(res) })
  //     .catch(err => { console.log(err) });

  // }

  return (
    <>
      {uid ? (
        <div className="main_container">
          <header>
            <Logo />
            <Nav />
          </header>

          <main className="mainContainer__post">
            <div className="myPost">
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
              <div className="img_injected">
                {/* <img src={imgTest} alt="" /> */}
              </div>
              <div className="iconImgAndPost">
                <i className="fa-solid fa-image"></i>
                <i className="fa-solid fa-paper-plane"></i>
              </div>

              
            </div>

            <div className="friend_Post_No_Img ">
                <div className="nameAndimg">
                  <img src={imgTest} alt="" />
                  <h4>Kevin02</h4>
                </div>

                <div className="viewPost">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi, esse!
                  </p>
                  <br />
                  <img src="https://theatrum-belli.com/wp-content/uploads/2019/03/Soldat-avec-syst%C3%A8me-FELIN.jpg" alt="" />
                </div>

                <div className="iconImgAndPost">
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-solid fa-comment"></i>
                </div>
              </div>
              <br />
          </main>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Home;
