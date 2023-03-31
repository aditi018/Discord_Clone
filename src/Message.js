import React from 'react'
import "./Message.css";
import { Avatar } from "@mui/material";

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className='message__info'>
        <h4>Aditi<span className='message_timeStamp'>8:00pm</span></h4>
        <p>This is a message...</p>
      </div>
    </div>
  )
}

export default Message
