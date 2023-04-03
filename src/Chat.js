import React, { useState,useEffect } from 'react'
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import db from "./firebase";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

function Chat() {

  const user = useSelector(selectUser);
  const channelId  =  useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input,setInput] = useState("");
  const [messages,setMessages ] = useState([]);


  useEffect(()=>{
    if(channelId){
      db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot)=>{
        setMessages(snapshot.docs.map((doc)=> doc.data()))
      })
    }
  },[channelId]);


  const sendMessage = e =>{
    e.preventDefault();

    db.collection("channels")
    .doc(channelId)
    .collection("messages")
    .add({
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      message : input,
      user:user,
    })

    setInput("");
  }

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>

      <div className='chat__messages'>
       {messages.map(message =>(
        <Message 
        timestamp = {message.timestamp}
        message={message.message}
        user ={message.user}/>
       ))}
      </div>
      <div className='chat__input'>
        <AddCircleIcon font-size="large"/>
        <form>
            <input 
            value={input} 
            disabled={!channelId }
            placeholder={`Message #${channelName}`}
            onChange={(e) => setInput(e.target.value)} />
            <button 
            type="submit" 
            className='chat__inputButton'
            disabled={!channelId}
            onClick={sendMessage}
            >Send Message</button>
        </form>
        <div className='chat__inputIcons'>
            <CardGiftcardIcon />
            <GifIcon />
            <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat
