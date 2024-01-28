import React from 'react'
import { useState } from 'react';
import './grouppopup.css'
import { usePocket } from '../../context/PocketContext';
import { redirect } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const GroupPopUp = () => {
    const navigate=useNavigate();
    const { setGroups, colors } = usePocket();

    const [ name, setName ] = useState("");
    const [groupColor, setGroupColor] = useState("#000"); 
    //button
    const showgroup=()=>{
        setGroups((prev)=>[...prev,{id:Date.now(),name:name,color:groupColor}])
        setName("");
        navigate("/*");
    }

    // console.log(Groups);

  return (
    <div className='popup-container'>
        {/* To blur */}
        <div className='zd'></div> 
        
        {/* to show the popup */}
        <div className='popup-center'>
            <div className='xy'>
                <h2 className='p-heading'>Create New Group</h2>

                <div className='g-name'>
                    <label htmlFor="name" >Group Name: </label>
                    <input
                      type='text'
                      id='name'
                      className='inputs'
                      placeholder='Enter Group Name'
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                </div>

               <div className='colors-box'>
                  <p>Choose Color</p>
        
                  {colors.map((color, index)=>{
                      return <div key={ index } onClick={ () => setGroupColor(color) } style={{ backgroundColor: color }} className='color-container'></div>
                  })}

               </div>
                

                
                <button className='btn' onClick={showgroup}>Create</button>
                

            </div>
            
        </div>
    </div>
  )
}

export default GroupPopUp
