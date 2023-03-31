import React from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';

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
    </div>
  )
}

export default Sidebar
