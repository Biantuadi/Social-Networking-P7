import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadPicture } from "../../actions/user.action";

const UpdateImg = () => {
  // const [file, setFile] = React.useState(null);
  // const dispatch = useDispatch();
  // const userData = useSelector((state) => state.userReducer);

  const fileName = (e) => {
    // setFile(e.target.files[0]);
    // const injectedImg = document.querySelector(".injected_img_path");
    // injectedImg.value = e.target.files[0].name;
    // injectedImg.classList.remove("desappear");
    // injectedImg.classList.add("appear");
  };

  const handlePicture = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" className="upload_img" onSubmit={handlePicture}>
      <div className="icon_UpdateImg">
        <label htmlFor="file-input">
          <i className="fa-solid fa-image"></i>
        </label>
        <input
          type="file"
          id="file-input"
          className="file-input"
          name="file"
          accept=".jpg, .jpeg, .png"
          onChange={fileName}
        />
      </div>
      <input type="submit" value="Envoyer" className="Upload" />
    </form>
  );
};

export default UpdateImg;
