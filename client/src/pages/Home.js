import React from "react";
import Auth from "../components/log/Auth";
import { UidContext } from "../components/AppContex";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import imgTest from "../img/test.jpg";
import axios from "axios";

const Home = () => {
  const uid = React.useContext(UidContext);

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

  const changeHeart = () => {
    const heart = document.querySelector(".fa-heart");
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");

    let likeAudio = new Audio(
      "https://phoneky.co.uk/content/mp3tones/tone/2020/sound-fx/facebookpop_c01368ea5038615.mp3"
    );

    if (heart.classList.contains("fa-solid")) likeAudio.play();
  };

  return (
    <>
      {uid ? (
        <div className="main_container">
          <header>
            <Logo />
            <Nav />
          </header>

          <main className="mainContainer__post">
            <div className="friend_Post_No_Img ">
              <div className="container_name_img_time_update">
                <div className="img-name-time">
                  <img src={imgTest} alt="" />
                  <div className="nameAndT">
                  <h4>Kevin02</h4>
                  <span>12 : 24</span>
                  </div>
                </div>

                <div className="update">
                  <i class="fa-solid fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>

                </div>
              </div>

              <div className="viewPost">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi, esse! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, exercitationem ratione, qui illo ab libero impedit culpa aspernatur fugiat earum recusandae amet consequatur optio dolorum sequi voluptates minus debitis aut.
                </p>
                <img
                  src="https://theatrum-belli.com/wp-content/uploads/2019/03/Soldat-avec-syst%C3%A8me-FELIN.jpg"
                  alt=""
                />
              </div>

              <div className="iconImgAndPost">
                <i className="fa-regular fa-heart" onClick={changeHeart}></i>
                <i className="fa-regular fa-comment"></i>
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
