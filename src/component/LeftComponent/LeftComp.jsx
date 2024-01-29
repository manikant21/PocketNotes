import React from 'react'
import "./left-component.css";
import MyGroup from './MyGroup';
import { usePocket } from '../../context/PocketContext';
import { NavLink } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import {useState} from "react";
import GroupPopUp from './GroupPopUp';
const LeftComp = () => {

  const { Groups, mediaToggle, setMediaToggle } = usePocket();

  console.log(mediaToggle);
  
  // console.log(Groups);

  // style={mediaToggle ? {display:"none"} : {display:"flex"}}

  // console.log(window.innerWidth);

  return (
    <div style={mediaToggle ? {display:"none"} : {display:"flex"}} className='left-container'>
      <div className='cont'>
        <h2 className='heading'>Pocket Notes</h2>
      </div>

      <div className='lower-cont'>

        {/* to list down all the Groups */}
        {Groups.map((curr, index) =>

          <NavLink style={{textDecoration: "none"}}key={index} to={`/singleGroup/${curr.id}`} >
            <MyGroup 
              key={curr.id}
              {...curr}  
            />
          </NavLink>
          
          )}
          
          {/* to redirect to popup menu */}
          <div className='plus-container'>
            <NavLink to={'/popup'}>
              < FaPlus  className='plus-icon' />
            </NavLink>
          </div>
          
      </div>
      
    </div>
  )

  // if(prompt){
  //   return <GroupPopUp />
  // }
}

export default LeftComp
