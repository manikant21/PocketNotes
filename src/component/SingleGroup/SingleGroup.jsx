import React, { useEffect, useState } from "react";
import "./single-group.css";
import { useParams } from "react-router-dom";
import { usePocket } from "../../context/PocketContext";
import Card from "../Card";
import InputBox from "../InputBox";

const SingleGroup = () => {
  const { groupId } = useParams();
  const { Groups, message } = usePocket();

  const requiredObj = (groupId) =>
    Groups.find((curr) => {
      return curr.id == groupId;
    });


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

  const filteredMessages = message.filter((curr) => {
    return curr.groupId === groupId;
  });

  return (
    <div className="single-container">
      <div className="heading-container">
        <div
          style={{ backgroundColor: requiredObj(groupId).color }}
          className="initials-container"
        >
          {findInitials(requiredObj(groupId).name)}
        </div>

        <h2 className="headings">{requiredObj(groupId).name}</h2>
      </div>

      <div className="card-container">
        {filteredMessages.map((x) => {
          return <Card key={x.id} {...x} />;
        })}
      </div>

      <InputBox />
    </div>
  );
};

export default SingleGroup;
