import React from 'react'
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />

      <div className='chat__messages'>
        <Message />
        <Message />
        <Message />
      </div>
      <div className='chat__input'>
        <AddCircleIcon font-size="large"/>
        <form>
            <input placeholder={'Message #TESTCHANNEL'} />
            <button type="submit" className='chat__inputButton'>Send Message</button>
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
