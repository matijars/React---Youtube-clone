import React, { useState } from "react";
import "./VideoItem.css";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import OverlayBtn from "./OverlayBtn"

function VideoItem({title, avatar, image, gif, link, channel, views, age}) {

  const [isVisible, setIsVisible] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    window.location.assign(link);
  }

  function handeVideoItemHover() {
    setIsVisible(true);
  }

  function handleVideoItemMouseLeave() {
    setIsVisible(false);
  }

  return (
    
    <div className='videoItem' onClick={handleClick} onMouseOver={handeVideoItemHover} onMouseLeave={handleVideoItemMouseLeave}>
      <div className='videoItem__thumbnail'>
        <img src={image} alt='' 
        onMouseOver={e => e.currentTarget.src = gif}
        onMouseLeave={e => e.currentTarget.src = image}/>
        <div className={`btnOverlay__holder ${isVisible ? "" : "hidden"}`}>
          <OverlayBtn icon={<WatchLaterIcon />}/>
          <OverlayBtn icon={<MenuOpenIcon />}/>
        </div>
      </div>
      <div className='videoItem__bottom'>
        <div className='videoItem__bottom__left'>
          <img src={avatar} alt='Random Avatar' className='avatar' />
        </div>
        <div className='videoItem__bottom__middle'>
          <h4 className='videoItem__title'>{title}</h4>
          <p className='videoItem__channel'>{channel}</p>
          <span className='videoItem__views'>{views} views</span>
          <span className='videoItem__age'> • {age} months ago</span>
        </div>
        <div className={`videoItem__bottom__right ${isVisible ? "" : "hidden"}`}>
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
