import React from 'react'
import "./Message.css";
import { Avatar } from "@mui/material";

function Message({timestamp , user, message}) {
  return (
    <div className='message'>
      <Avatar src={user.photo}/>
      <div className='message__info'>
        <h4>{user.displayName}<span className='message_timeStamp'>{new Date(timestamp?.toDate()).toString("en-US")}</span></h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message