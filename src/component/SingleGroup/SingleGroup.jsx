import React, { useEffect } from 'react'
import "./single-group.css";
import { useParams } from "react-router-dom";
import { usePocket } from '../../context/PocketContext';
import Card from "../Card";
import InputBox from '../InputBox';

const SingleGroup = () => {

  const { groupId } = useParams();
  const { Groups, message } = usePocket();

  // console.log(message);
  //console.log(groupId);

// Header Section of this page
    const requiredObj = Groups.find((curr)=>{
    return curr.id == groupId;
  })

//Message Section of this page
const filteredMessages = message.filter((curr) => {
  return curr.groupId === groupId;
})

// console.log(filteredMessages);
// const name = requiredObj.map((curr)=>{
//   return <h2 className='headings'>{curr.name}</h2>
//   })


//TextArea Section Of This Page




  return (
    <div className='single-container'>
      
      <h2 className='headings'>{requiredObj?.name}</h2>
      {/* <h2 className='headings'>{ name }</h2> */}

      <div className='card-container'>
        {filteredMessages.map((x)=>{
        return <Card key={x.id} {...x}/>
        // console.log(x);
      })}
      </div>

      <InputBox/>

    </div>
  )
}

export default SingleGroup
