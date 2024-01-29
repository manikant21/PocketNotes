import React from "react";
import "./inputbox.css";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router-dom";
import { usePocket } from "../context/PocketContext";
const InputBox = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //Declarations
  const { groupId } = useParams();
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  // const [currMessage,setCurrMessage]=useState("");
  const { message, setMessage } = usePocket();
  // console.log(date);

  // Adding new Message Object To My Message Array
  const add = () => {
    let da = new Date();
    let d = da.getDate();
    let m = da.getMonth();
    let m2 = months[m];
    let y = da.getFullYear();
    const fullDate = d.toString() + " " + m2 + " " + y.toString();
    //setDate( fullDate );
    let h = da.getHours();
    let mi = da.getMinutes();
    if (mi >= 0 && mi < 10) {
      var minu = "0" + mi.toString();
    } else {
      var minu = mi.toString();
    }
    let time = h.toString() + ":" + minu;
    if (h > 12 && h < 24) {
      var time1 = time + " " + "PM";
    } else {
      var time1 = time + " " + "AM";
    }

    setMessage((prev) => [
      ...prev,
      {
        id: Date.now(),
        groupId: groupId,
        message: input,
        date: fullDate,
        time: time1,
      },
    ]);
    setInput("");
  };

  return (
    <div className="input-boxs">
      <textarea
        className="box"
        placeholder="Enter your text here..........."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="8"
        cols="99"
      />

      <IoMdSend className="icon" onClick={add} />
    </div>
  );
};

export default InputBox;
