import React from 'react';

const MainSend = () => {
  const [message, setMessage] = React.useState("");



    return (
        <main className="mainContainer__new_post">
        <div className="myPost">
          <h1>Ajouter une publication</h1>
          <br />
  
          <form className="forContainer">
            <textarea
              name="text"
              rows="14"
              cols="10"
              wrap="soft"
              className="message"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <br />
            <br />
  
            <div className="containerImg">
              <img
                src="https://theatrum-belli.com/wp-content/uploads/2019/03/Soldat-avec-syst%C3%A8me-FELIN.jpg"
                alt=""
              />
            </div>
  
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
    );
};

export default MainSend;