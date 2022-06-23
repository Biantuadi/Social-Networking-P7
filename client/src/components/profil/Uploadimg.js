import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.action";

const Uploadimg = () => {

    const [file, setFile] = React.useState(null);
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.userReducer)

    const handlePicture = (e) => {
        e.preventDefault();
    }

  return (
    <form action="" className="upload_img" onSubmit={handlePicture}>
      <label htmlFor="file-input">
        {/* <button type="submit"> */}
          <i className="fa-solid fa-image"></i>
        {/* </button> */}
      </label>
      <input
        type="file"
        id="file-input"
        className="file-input"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input type="submit" value="Envoyer" className="Upload"/>
    </form>
  );
};

export default Uploadimg;
