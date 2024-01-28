import React from 'react';
import './mygroup.css';

const MyGroup = (curr) => {
  // const {groupId}=useParams();
  const {name, color}=curr;

  const findInitials = (name) => {
    const splittedArray = name.split(" ");

    if(splittedArray.length === 1) {
      return splittedArray[0][0];
    }
    else{
      return (splittedArray[0][0].toUpperCase() + splittedArray[1][0].toUpperCase());
    }
  }

  // console.log(findInitials(name));
  


  return (
    <div className='xyz'>
        <ul className='che'>
          <div className='group-container'>
            <p className='initials' style={{ backgroundColor:color }}>{findInitials(name)}</p>
            <p className='names'>{name}</p>
          </div>
      </ul>
    </div>
  )
}

export default MyGroup
