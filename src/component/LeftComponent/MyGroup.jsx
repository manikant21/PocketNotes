import React, { useState, useEffect } from "react";
import "./mygroup.css";
import { usePocket } from "../../context/PocketContext";

const MyGroup = (curr) => {
  // const {groupId}=useParams();
  const { name, color } = curr;
  const [pixel, setPixel] = useState(window.innerWidth);
  const { setMediaToggle } = usePocket();

  // useEffect(setPixel(window.innerWidth), [window.innerWidth]);
  useEffect(() => {
    const fn = (e) => {
      setPixel(window.innerWidth);
    };

    window.addEventListener("resize", fn);
    return () => {
      window.removeEventListener("resize", fn);
    };
  });

  console.log(window.innerWidth);

  const findInitials = (name) => {
    const splittedArray = name.split(" ");

    if (splittedArray.length === 1) {
      return splittedArray[0][0].toUpperCase();
    } else {
      return (
        splittedArray[0][0].toUpperCase() + splittedArray[1][0].toUpperCase()
      );
    }
  };

  // console.log(findInitials(name));

  return (
    <div className="xyz">
      <ul className="che">
        <div
          onClick={
            pixel < 469
              ? () => setMediaToggle(true)
              : () => setMediaToggle(false)
          }
          className="group-container"
        >
          <p className="initials" style={{ backgroundColor: color }}>
            {findInitials(name)}
          </p>

          <p className="names">{name}</p>
        </div>
      </ul>
    </div>
  );
};

export default MyGroup;
