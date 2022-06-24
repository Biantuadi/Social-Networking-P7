import React from 'react';
import imgTest from "../../img/test.jpg";


const Post = () => {


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
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                </div>

                <div className="viewPost">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi, esse! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Harum, exercitationem ratione, qui illo ab
                    libero impedit culpa aspernatur fugiat earum recusandae amet
                    consequatur optio dolorum sequi voluptates minus debitis
                    aut.
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
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                </div>

                <div className="viewPost">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi, esse! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Harum, exercitationem ratione, qui illo ab
                    libero impedit culpa aspernatur fugiat earum recusandae amet
                    consequatur optio dolorum sequi voluptates minus debitis
                    aut.
                  </p>
                </div>

                <div className="iconImgAndPost">
                  <i className="fa-regular fa-heart" onClick={changeHeart}></i>
                  <i className="fa-regular fa-comment"></i>
                </div>
              </div>
              <br />
            </main>
        </>
    );
};

export default Post;