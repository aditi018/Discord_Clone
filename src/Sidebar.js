import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>Clever Programmer</h3>
        <ExpandMoreIcon />
      </div>
        <div className='sidebar__channels'>
            <div className='sidebar_channelsHeader'>
                <div className='sidebar__header'>
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>
                <AddIcon className="sidebar__addChannels" />
            </div>
            <div className='sidebar__channelsList'>
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>
        </div>
        <div className='sidebar__voice'>
            <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large'/>
            <div className='sidebar__voiceInfo'>
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className='sidebar__voiceIcons'>
                <InfoIcon />
                <CallIcon />
            </div>
        </div>
        <div className='sidebar__profile'>
            <Avatar src="https://tse1.mm.bing.net/th?id=OIP.l8Gq2tMTiFsD_rbHJcoY6QHaLO&pid=Api&P=0"/>
            <div className='sidebar__profileInfo'>
                <h3>Aditi Das</h3>
                <p>#1809</p>
            </div>
            <div className='sidebar__profileIcons'>
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
        </div>
    </div>
  )
}

export default Sidebar
