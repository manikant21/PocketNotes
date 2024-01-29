import React from "react";
import "./home.css";
import { FaLock } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <div className="contents">
        <img
          className="home-img"
          src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QF4Vht7H3kFhJqUifqHGrCex1LxI2OxylfLfT6MrI9c2HeCYSm56iGI3vS1pt3hdGFSBS2i1zclaoM3g~XV1Q9o305UxJASiCVCtRepfOyhrrdZMbAXm4IUAP~4R1MtFI~ljWuED0jgOd-8A4-s75LIcv4O3bgIAAM06pxxyxsIfVXqgNybXvw6vskT5qa7vJvOz9FmKIfhckrdBbMCz3gsbrZNjZWN0epOs-r0-UpvElFq5LaXYs75ghAZO-rlD9K3oBBSrYgiFQBeTZZkWKxJlMkCWPNv5p5eyMDbfBnc3qbikLWV-CysT4V2h4L~Qys1gHo7Fr5~~cNuTFyaeGg__"
          alt="Home-Image"
        />
        <h2 className="head-name">Pocket Notes</h2>
        <div  className="para-name">
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>

        <div className="last">
          <FaLock />
          <p>end-to-end encrypted</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
