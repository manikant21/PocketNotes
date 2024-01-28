import React from 'react'
import './card.css';

 const Card = ({ message, time, date }) => {

  return (
    <div className='card'>
        <div className='message-container'>
          <p>{message}</p>
        </div>

        <div className='date-time'>
          <p>{date}</p>
          <p>{time}</p>
        </div> 
        
    </div>
    
  )
}
export default Card
