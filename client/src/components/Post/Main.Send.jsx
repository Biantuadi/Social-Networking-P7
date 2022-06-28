import React from "react";

const MainSend = () => {
  const [message, setMessage] = React.useState("");
  const [file, setFile] = React.useState(null);

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
            <input
              type="text"
              disabled
              className="container-name-picture"
              placeholder="Changer d'image"
              value={file ? file.name : ""}
            />
          </div>

          <div className="iconImgAndPost">
            <label htmlFor="file-input">
              <i className="fa-solid fa-image"></i>
            </label>
            <input
              type="file"
              id="file-input"
              className="file-input"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setFile(e.target.files[0])}
            />

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
