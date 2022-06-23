import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import Nav from "../Nav";
import Uploadimg from "./Uploadimg";
import { useDispatch } from "react-redux";
import { updateProfil } from "../../actions/user.action";

const UpdateProfil = () => {
  const [bio, setMessage] = React.useState("");
  const [name, setName] = React.useState("");

  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const nameError = document.getElementById("nameError");
    // const bioError = document.getElementById("bioError");
    const btnSubmit = document.getElementById("btnSubmit");

    if (name === "") return (btnSubmit.disabled = true);

    if (bio === "") return (btnSubmit.disabled = true);

    if (name === "" && bio === "") return (btnSubmit.disabled = true);

    if (name !== "" && bio === "") return (btnSubmit.disabled = true);

    if (name === "" && bio !== "") return (btnSubmit.disabled = true);

    btnSubmit.disabled = false;
    dispatch(updateProfil(userData._id, name, bio));
    window.location.reload();
  };

  return (
    <div className="mainContainer__100vh">
      <header>
        <Logo />
        <Nav />
      </header>

      <main className="main-profil">
        <div className="my-profil">
          <div className="conatainer_name_profilImg">
            <h1>
              Profil de <span>{userData.name} </span>
            </h1>
            <br />
            <br />

            <div className="containerImg">
              <img src={userData.imageUrl} alt="" />
            </div>

            <div>
              <input
                type="text"
                disabled
                className="injected_img_path desappear"
              />
            </div>

            <Uploadimg />
          </div>

          <form className="forContainer" onSubmit={handleSubmit}>
            <div className="nameInput-container">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                placeholder={userData.name}
                className="name"
                value={name}
                // onChange={(e) => setMessage(e.target.value)}
                onChange={(e) => setName(e.target.value)}
              />
              <span id="nameError" className="error"></span>
            </div>

            <div className="bioInput-container">
              <label htmlFor="bio">Biographie</label>
              <textarea
                name="text"
                rows="14"
                cols="10"
                wrap="soft"
                className="bio"
                value={bio}
                placeholder={userData.bio}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span id="bioError" className="error"></span>
            </div>
            <br />

            <div className="iconImgAndPost">
              <button type="submit" className="" id="btnSubmit">
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
